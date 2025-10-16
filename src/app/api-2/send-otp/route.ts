import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verifications.create({
        to: phoneNumber,
        channel: "sms",
      });

    return NextResponse.json({ status: verification.status });
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
