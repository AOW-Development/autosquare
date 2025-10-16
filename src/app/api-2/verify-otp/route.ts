import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req: Request) {
  try {
    const { phoneNumber, code } = await req.json();

    if (!phoneNumber || !code) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verificationChecks.create({ to: phoneNumber, code });

    if (verificationCheck.status === "approved") {
      return NextResponse.json({
        success: true,
        message: "OTP verified successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Invalid OTP",
      });
    }
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
