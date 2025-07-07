// <!-- submit-ticket.md -->
// # Submit a Ticket Page Prompt

// Generate a **mobile-first**, fully responsive “Submit a Ticket” page using Tailwind CSS (React or plain HTML+Tailwind):

// - **Shared Shell**  
//   - **Banner**: full-width background of cars in motion, overlaid centered `brand-logo.svg` and title **“Submit a ticket”** (uppercase, text-2xl mobile → text-3xl md/lg).  
//   - **Sidebar**: collapsible on mobile; fixed on md/lg; links: Profile, Shipping Address, Billing Address, Order History, Garage, Log out; highlight none (public form).  
//   - **Breadcrumb** under banner: “Home > Submit a ticket” in small, gray-400.

// - **Two-Column Layout** (mobile: stack; md/lg: grid-cols-2, gap-8, container p-4 → p-6 → p-8):  
//   1. **Info Column** (left):  
//      - Small label: “Have a question?” in gray-300, uppercase.  
//      - Heading: **“WE ARE HERE TO HELP”** (uppercase, text-xl mobile → text-2xl md).  
//      - Paragraph (text-base, gray-200):  
//        “We value your questions, suggestions, and feedback. Please use the form to get in touch with us. We’ll strive to respond to you as promptly as possible.”  
//      - **Contact Details** list (icon + text, gap-4):  
//        - **Working hours**: Clock icon + “Mon–Fri: 8AM – 7PM EST”  
//        - **Phone**: Phone icon + “(888) 748-0882”  
//        - **Email Address**: Mail icon + `support@autosquare.us`  
//        - **Office Location**: Location icon + “6335 Contessa Dr, Orlando, FL 32829”  

//   2. **Form Column** (right):  
//      - Dark card `bg-gray-800`, rounded-2xl, shadow-sm, p-6.  
//      - **Fields** (grid of two columns on md, stacked mobile, gap-4):  
//        - **Full Name*** (placeholder “Name”)  
//        - **Order id*** (placeholder “Order id”)  
//        - **Email*** (placeholder “example@gmail.com”)  
//        - **Phone*** (placeholder “(   ) ___-____”)  
//        - **Text*** (textarea placeholder “Write your message”, spans full width)  
//      - **Submit Ticket** button: full-width, `bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 mt-4`.

// - **Inputs**: rounded-lg, border-gray-600, focus:border-blue-400, placeholder-gray-500.  
// - Ensure at breakpoints: info above form on mobile; side-by-side on md/lg; typography and padding scale fluidly.  
