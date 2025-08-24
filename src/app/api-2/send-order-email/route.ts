import { NextRequest, NextResponse } from 'next/server';
import { sendOrderEmails, formatOrderData } from '@/lib/mail';
import { sendCustomerInvoiceEmail } from '@/lib/customerMail';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required data
    if (!data.user?.email) {
      throw new Error('User email is required');
    }

    // Format the data properly
    const orderData = formatOrderData(
      data.user,
      data.payment,
      data.billing,
      data.shipping,
      data.cartItems
    );
    
    // Send both emails
    const [adminResult, customerResult] = await Promise.all([
      sendOrderEmails(orderData),
      sendCustomerInvoiceEmail(orderData)
    ]);

    return NextResponse.json({ 
      success: true, 
      admin: adminResult, 
      customer: customerResult 
    });
  } catch (error) {
    console.error('Error sending order emails:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' }, 
      { status: 500 }
    );
  }
}