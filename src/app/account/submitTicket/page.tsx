// <!-- submit-ticket.md -->
// # Submit a Ticket Page Prompt

// Generate a **mobile-first**, fully responsive "Submit a Ticket" page using Tailwind CSS (React or plain HTML+Tailwind):

// - **Shared Shell**  
 
//   
//   - **Breadcrumb** under banner: "Images/HouseLine.png  Images/arrows(1).svg "Submit a ticket" , white ,.

// - **Two-Column Layout** (mobile: stack; md/lg: grid-cols-2, gap-8, container p-4 → p-6 → p-8):  
//   1. **Info Column** (left):  
//      - Small label: "Have a question?" in gray-300, uppercase.  
//      - Heading: **"WE ARE HERE TO HELP"** (uppercase, text-xl mobile → text-2xl md).  
//      - Paragraph (text-base, gray-200):  
//        "We value your questions, suggestions, and feedback. Please use the form to get in touch with us. We'll strive to respond to you as promptly as possible."  
//      - **Contact Details** list (icon + text, gap-4):  
//        - **Working hours**: Clock icon + "Mon–Fri: 8AM – 7PM EST"  path: Images/contact_us.png
//        - **Phone**: Phone icon + "(888) 748-0882"        path: Images/contact_us(1).png
//        - **Email Address**: Mail icon + `support@autosquare.us`  path: Images/contact_us(3).png
//        - **Office Location**: Location icon + "6335 Contessa Dr, Orlando, FL 32829"  path: Images/contact_us(2).png

//   2. **Form Column** (right):  
//      - Dark card `bg-gray-800`, rounded-2xl, shadow-sm, p-6.  
//      - **Fields** (grid of two columns on md, stacked mobile, gap-4):  
//        - **Full Name*** (placeholder "Name")  
//        - **Order id*** (placeholder "Order id")  
//        - **Email*** (placeholder "example@gmail.com")  
//        - **Phone*** (placeholder "(   ) ___-____")  
//        - **Text*** (textarea placeholder "Write your message", spans full width)  
//      - **Submit Ticket** button: full-width, `bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 mt-4`.

// - **Inputs**: rounded-lg, border-gray-600, focus:border-blue-400, placeholder-gray-500.  
// - Ensure at breakpoints: info above form on mobile; side-by-side on md/lg; typography and padding scale fluidly.  

import Image from 'next/image';

export default function SubmitTicketPage() {
  return (
    <div className="min-h-screen w-full bg-[#0B1422] flex flex-col items-center py-8 px-2">
      {/* Breadcrumb */}
      
      <div className="w-full max-w-6xl flex items-center gap-2  pl-4 md:pl-6 lg:pl-8">
        <Image src="/Images/HouseLine.png" alt="Home" width={20} height={20} />
        <Image src="/Images/arrows (1).svg" alt=">" width={16} height={16} />
        <span className="text-white text-base font-medium">Submit a ticket</span>
      </div>
      {/* Main content grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent container p-4 md:p-6 lg:p-8">
        {/* Info Column */}
        <div className="flex flex-col gap-6 justify-center">
          {/* <div className="uppercase text-xs text-gray-300 font-semibold tracking-wider">Have a question?</div> */}
          <div className="uppercase text-xl md:text-2xl font-bold text-white">Submit a ticket</div>
          <div className="text-base text-gray-200">
            We value your questions, suggestions, and feedback. Please use the form to get in touch with us. We'll strive to respond to you as promptly as possible.
          </div>
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex items-center gap-4">
              <Image src="/Images/contact_us.png" alt="Clock" width={32} height={32} />
              <div className="flex flex-col">
                <span className="text-white text-base font-semibold mb-0.5">Working hours</span>
                <span className="text-gray-200 text-sm">Mon–Fri: 8AM – 7PM EST</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/Images/contact_us (1).png" alt="Phone" width={32} height={32} />
              <div className="flex flex-col">
                <span className="text-white text-base font-semibold mb-0.5">Phone</span>
                <span className="text-gray-200 text-sm">(888) 748-0882</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/Images/contact_us (3).png" alt="Mail" width={32} height={32} />
              <div className="flex flex-col">
                <span className="text-white text-base font-semibold mb-0.5">Email address</span>
                <span className="text-gray-200 text-sm underline">support@autosquare.us</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/Images/contact_us (2).png" alt="Location" width={32} height={32} />
              <div className="flex flex-col">
                <span className="text-white text-base font-semibold mb-0.5">Office location</span>
                <span className="text-gray-200 text-sm">6335 Contessa Dr, Orlando, FL 32829</span>
              </div>
            </div>
          </div>
        </div>
        {/* Form Column */}
        <div className="bg-gray-900 rounded-lg shadow-sm p-6 flex flex-col justify-center">
          <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col col-span-1">
              <label htmlFor="name" className="text-white text-sm font-medium mb-1">Full Name<span className="text-white-500">*</span></label>
              <input id="name" type="text" required placeholder="Name" className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2" />
            </div>
            {/* Order ID */}
            <div className="flex flex-col col-span-1">
              <label htmlFor="orderId" className="text-white text-sm font-medium mb-1">Order ID<span className="text-white-500">*</span></label>
              <input id="orderId" type="text" required placeholder="Order id" className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2" />
            </div>
            {/* Email */}
            <div className="flex flex-col col-span-1">
              <label htmlFor="email" className="text-white text-sm font-medium mb-1">Email<span className="text-white-500">*</span></label>
              <input id="email" type="email" required placeholder="example@gmail.com" className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2" />
            </div>
            {/* Phone */}
            <div className="flex flex-col col-span-1">
              <label htmlFor="phone" className="text-white text-sm font-medium mb-1">Phone<span className="text-white-500">*</span></label>
              <input id="phone" type="text" required placeholder="(   ) ___-____" className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2" />
            </div>
            {/* Message */}
            <div className="flex flex-col col-span-1 md:col-span-2">
              <label htmlFor="message" className="text-white text-sm font-medium mb-1">Message<span className="text-white-500">*</span></label>
              <textarea id="message" required placeholder="Write your message" className="rounded-lg border border-white focus:border-blue-400 bg-gray-900 text-white placeholder-gray-500 px-4 py-2 min-h-[100px] resize-none" />
            </div>
            <button type="submit" className="col-span-1 md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 mt-4 font-semibold transition">Submit Ticket</button>
          </form>
        </div>
      </div>
      </div>
    

  );
}
