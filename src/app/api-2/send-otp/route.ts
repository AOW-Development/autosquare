import { NextResponse } from "next/server";
import twilio from "twilio";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export async function POST(req: Request) {
  try {
    const { phoneNumber } = await req.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Auto-detect country instead of forcing "CA"
    const parsedNumber = parsePhoneNumberFromString(phoneNumber);
    if (!parsedNumber || !parsedNumber.isValid()) {
      return NextResponse.json(
        { error: "Invalid phone number format" },
        { status: 400 }
      );
    }

    const e164Number = parsedNumber.number; // "+14165550198" for US/CA

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID!,
      process.env.TWILIO_AUTH_TOKEN!
    );

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID!)
      .verifications.create({
        to: e164Number,
        channel: "sms",
      });

    return NextResponse.json({ status: verification.status });
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
