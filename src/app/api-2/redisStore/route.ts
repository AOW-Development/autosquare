import { NextResponse } from "next/server";
import Redis from "ioredis";

// Initialize Redis client with your credentials
const redis = new Redis({
  host: "redis-11580.c321.us-east-1-2.ec2.redns.redis-cloud.com",
  port: 11580,
  username: "default",
  password: "EHDLO3zgmyJUosdi3ButZiuevGR2UImv",
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

redis.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

redis.on("connect", () => {
  console.log("Redis Client Connected");
});

// Define types for checkout data
interface CheckoutData {
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    company?: string;
    country: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    userType: string;
    email: string;
  };
  billingInfo: {
    firstName: string;
    lastName: string;
    phone: string;
    company?: string;
    country: string;
    address: string;
    apartment?: string;
    city: string;
    state: string;
    zipCode: string;
    userType: string;
    sameAsShipping: boolean;
  };
  verification: {
    isVerified: boolean;
    phoneNumber?: string;
    verifiedAt?: string;
  };
  cartItems?: Array<{
    id: string;
    name: string;
    title: string;
    subtitle: string;
    image: string;
    quantity: number;
    price: number;
  }>;
  orderTotal?: {
    subtotal: number;
    shipping: number;
    taxes: number;
    total: number;
  };
  termsAccepted: boolean;
  sessionId: string;
  createdAt: string;
  updatedAt: string;
}

// POST - Store checkout data in Redis
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, sessionId, data } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    switch (action) {
      case "saveCheckout": {
        // Save to array in single key "newusers"
        const key = "newusers";
        const completeData: CheckoutData = {
          ...data,
          sessionId,
          createdAt: data.createdAt || new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        // Get existing array
        const existingData = await redis.get(key);
        let usersArray = existingData ? JSON.parse(existingData) : [];

        console.log("📊 Current users in array:", usersArray.length);
        console.log("📧 New user email:", completeData.customerInfo?.email);
        console.log("📱 New user phone:", completeData.customerInfo?.phone);

        // ALWAYS add new user (no duplicate checking)
        console.log("➕ Adding new user");
        usersArray.push(completeData);

        console.log("✅ Total users after save:", usersArray.length);

        // Save back to Redis
        await redis.set(key, JSON.stringify(usersArray));

        return NextResponse.json({
          success: true,
          message: "Checkout data saved to newusers array",
          totalUsers: usersArray.length,
          isUpdate: false,
        });
      }

      case "debugGetAll": {
        // Debug: Get all users from newusers
        const key = "newusers";
        const allData = await redis.get(key);
        const usersArray = allData ? JSON.parse(allData) : [];

        return NextResponse.json({
          success: true,
          totalUsers: usersArray.length,
          users: usersArray,
          rawData: allData,
        });
      }

      case "saveOtpAttempt": {
        // Track OTP attempts to prevent spam
        const key = `otp:attempts:${data.phoneNumber}`;
        const attempts = await redis.get(key);
        const currentAttempts = attempts ? parseInt(attempts) : 0;

        if (currentAttempts >= 5) {
          return NextResponse.json(
            { error: "Too many OTP attempts. Please try again later." },
            { status: 429 }
          );
        }

        await redis.setex(
          key,
          3600, // 1 hour TTL
          (currentAttempts + 1).toString()
        );

        return NextResponse.json({
          success: true,
          attempts: currentAttempts + 1,
        });
      }

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Redis POST Error:", error);
    return NextResponse.json(
      { error: "Failed to save data", details: error.message },
      { status: 500 }
    );
  }
}

// GET - Retrieve checkout data from Redis
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");
    const type = searchParams.get("type"); // customer, shipping, billing, verification, complete
    const phoneNumber = searchParams.get("phoneNumber"); // For OTP attempts

    if (!sessionId && !phoneNumber) {
      return NextResponse.json(
        { error: "Session ID or phone number is required" },
        { status: 400 }
      );
    }

    // Get OTP attempts
    if (phoneNumber && type === "otpAttempts") {
      const key = `otp:attempts:${phoneNumber}`;
      const attempts = await redis.get(key);
      return NextResponse.json({
        attempts: attempts ? parseInt(attempts) : 0,
      });
    }

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Get checkout data from "newusers" array
    const key = "newusers";
    const allData = await redis.get(key);

    if (!allData) {
      return NextResponse.json({
        data: null,
        allUsers: [],
      });
    }

    const usersArray = JSON.parse(allData);

    // If type is "all", return all users
    if (type === "all") {
      return NextResponse.json({
        data: null,
        allUsers: usersArray,
        totalUsers: usersArray.length,
      });
    }

    // Find specific user by sessionId
    const userData = usersArray.find(
      (user: any) => user.sessionId === sessionId
    );

    return NextResponse.json({
      data: userData || null,
      allUsers: usersArray,
      totalUsers: usersArray.length,
    });
  } catch (error: any) {
    console.error("Redis GET Error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve data", details: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Clear checkout data from Redis
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId");
    const deleteAll = searchParams.get("deleteAll");

    const key = "newusers";

    // Delete all users
    if (deleteAll === "true") {
      await redis.del(key);
      return NextResponse.json({
        success: true,
        message: "All checkout data cleared",
      });
    }

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    // Delete specific user from array
    const existingData = await redis.get(key);
    if (!existingData) {
      return NextResponse.json({
        success: true,
        message: "No data to delete",
      });
    }

    let usersArray = JSON.parse(existingData);
    usersArray = usersArray.filter((user: any) => user.sessionId !== sessionId);

    await redis.set(key, JSON.stringify(usersArray));

    return NextResponse.json({
      success: true,
      message: "User checkout data removed",
      remainingUsers: usersArray.length,
    });
  } catch (error: any) {
    console.error("Redis DELETE Error:", error);
    return NextResponse.json(
      { error: "Failed to delete data", details: error.message },
      { status: 500 }
    );
  }
}

// PUT - Update specific fields in checkout data
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { sessionId, updates } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 }
      );
    }

    const key = "newusers";
    const existingData = await redis.get(key);

    if (!existingData) {
      return NextResponse.json(
        { error: "No existing data found" },
        { status: 404 }
      );
    }

    let usersArray = JSON.parse(existingData);
    const userIndex = usersArray.findIndex(
      (user: any) => user.sessionId === sessionId
    );

    if (userIndex === -1) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update user data
    usersArray[userIndex] = {
      ...usersArray[userIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    // Save back to Redis
    await redis.set(key, JSON.stringify(usersArray));

    return NextResponse.json({
      success: true,
      message: "Data updated successfully",
      data: usersArray[userIndex],
    });
  } catch (error: any) {
    console.error("Redis PUT Error:", error);
    return NextResponse.json(
      { error: "Failed to update data", details: error.message },
      { status: 500 }
    );
  }
}
