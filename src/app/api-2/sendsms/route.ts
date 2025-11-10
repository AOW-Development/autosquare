import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request: Request) {
  try {
    const { to, message } = await request.json();

    if (!to || !message) {
      return NextResponse.json({ success: false, error: "Missing 'to' or 'message'" }, { status: 400 });
    }

    const client = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);

    const sms = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER!,
      to,
    });

    return NextResponse.json({ success: true, sid: sms.sid });
  } catch (error: any) {
    console.error("Error sending SMS:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
