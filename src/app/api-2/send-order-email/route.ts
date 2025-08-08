import { NextRequest, NextResponse } from 'next/server';
import { sendOrderEmails, formatOrderData } from '@/lib/mail';
import { sendCustomerInvoiceEmail } from '@/lib/customerMail';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Format the data properly
    const orderData = formatOrderData(
      data.user,
      data.payment,
      data.billing,
      data.shipping,
      data.cartItems
    );
    
    const adminResult = await sendOrderEmails(orderData);
    const customerResult = await sendCustomerInvoiceEmail(orderData);

    return NextResponse.json({ success: true, admin: adminResult, customer: customerResult });
  } catch (error) {
    console.error('Error sending order emails:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
}