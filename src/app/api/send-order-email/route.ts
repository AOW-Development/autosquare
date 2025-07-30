import { NextRequest, NextResponse } from 'next/server';
import { sendOrderEmails, formatOrderData } from '@/lib/mail';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Format the data properly
    const orderData = formatOrderData(
      data.user,
      data.payment,
      data.billing,
      data.cartItems
    );
    
    const result = await sendOrderEmails(orderData);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error sending order emails:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
}