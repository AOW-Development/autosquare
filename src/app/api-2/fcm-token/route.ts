import { NextRequest, NextResponse } from "next/server";
import Redis from "ioredis";

// Initialize Redis client
const redis = new Redis({
  host:
    process.env.REDIS_HOST ||
    "redis-11580.c321.us-east-1-2.ec2.redns.redis-cloud.com",
  port: parseInt(process.env.REDIS_PORT || "11580"),
  username: process.env.REDIS_USERNAME || "default",
  password: process.env.REDIS_PASSWORD || "EHDLO3zgmyJUosdi3ButZiuevGR2UImv",
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

interface FCMTokenData {
  token: string;
  sessionId: string;
  userAgent: string;
  timestamp: string;
  url: string;
}

// POST - Store FCM token in Redis
export async function POST(req: NextRequest) {
  try {
    const body: FCMTokenData = await req.json();
    const { token, sessionId, userAgent, timestamp, url } = body;

    if (!token || !sessionId) {
      return NextResponse.json(
        { error: "Token and sessionId are required" },
        { status: 400 }
      );
    }

    // Store token with sessionId as key
    const tokenKey = `fcm:token:${sessionId}`;
    const tokenData = {
      token,
      sessionId,
      userAgent,
      timestamp,
      url,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Store token data
    await redis.setex(tokenKey, 60 * 60 * 24 * 30, JSON.stringify(tokenData)); // 30 days TTL

    // Also store in a set of all tokens for easy lookup
    const allTokensKey = "fcm:tokens:all";
    await redis.sadd(allTokensKey, token);

    // Store token to sessionId mapping
    const tokenToSessionKey = `fcm:token-to-session:${token}`;
    await redis.setex(tokenToSessionKey, 60 * 60 * 24 * 30, sessionId);

    // Update or create user entry in newusers array with FCM token
    const usersKey = "newusers";
    const existingData = await redis.get(usersKey);
    let usersArray = existingData ? JSON.parse(existingData) : [];

    // Find user by sessionId and update with FCM token
    const userIndex = usersArray.findIndex(
      (user: any) => user.sessionId === sessionId
    );

    if (userIndex !== -1) {
      // Update existing user
      usersArray[userIndex] = {
        ...usersArray[userIndex],
        fcmToken: token,
        fcmTokenUpdatedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    } else {
      // Create new anonymous user entry
      const newUser = {
        sessionId,
        fcmToken: token,
        userAgent,
        url,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isAnonymous: true,
      };
      usersArray.unshift(newUser);
    }

    await redis.set(usersKey, JSON.stringify(usersArray));

    return NextResponse.json({
      success: true,
      message: "FCM token stored successfully",
      sessionId,
    });
  } catch (error: any) {
    console.error("Error storing FCM token:", error);
    return NextResponse.json(
      { error: "Failed to store FCM token", details: error.message },
      { status: 500 }
    );
  }
}

// GET - Retrieve FCM token by sessionId
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");
    const token = searchParams.get("token");

    if (!sessionId && !token) {
      return NextResponse.json(
        { error: "sessionId or token is required" },
        { status: 400 }
      );
    }

    if (sessionId) {
      const tokenKey = `fcm:token:${sessionId}`;
      const tokenData = await redis.get(tokenKey);

      if (!tokenData) {
        return NextResponse.json({ token: null });
      }

      return NextResponse.json(JSON.parse(tokenData));
    }

    if (token) {
      const tokenToSessionKey = `fcm:token-to-session:${token}`;
      const sessionId = await redis.get(tokenToSessionKey);

      if (!sessionId) {
        return NextResponse.json({ sessionId: null });
      }

      const tokenKey = `fcm:token:${sessionId}`;
      const tokenData = await redis.get(tokenKey);

      return NextResponse.json(tokenData ? JSON.parse(tokenData) : null);
    }
  } catch (error: any) {
    console.error("Error retrieving FCM token:", error);
    return NextResponse.json(
      { error: "Failed to retrieve FCM token", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Remove FCM token
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId is required" },
        { status: 400 }
      );
    }

    const tokenKey = `fcm:token:${sessionId}`;
    const tokenData = await redis.get(tokenKey);

    if (tokenData) {
      const parsed = JSON.parse(tokenData);
      const token = parsed.token;

      // Remove from all tokens set
      const allTokensKey = "fcm:tokens:all";
      await redis.srem(allTokensKey, token);

      // Remove token to session mapping
      const tokenToSessionKey = `fcm:token-to-session:${token}`;
      await redis.del(tokenToSessionKey);
    }

    // Delete token data
    await redis.del(tokenKey);

    return NextResponse.json({
      success: true,
      message: "FCM token removed successfully",
    });
  } catch (error: any) {
    console.error("Error removing FCM token:", error);
    return NextResponse.json(
      { error: "Failed to remove FCM token", details: error.message },
      { status: 500 }
    );
  }
}
