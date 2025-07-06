// <!-- thank-you.md -->
// # Order Confirmation (“Thank You”) Page Prompt

// Generate a **mobile-first**, fully responsive “Thank You” / Order Confirmation page using Tailwind CSS (React or plain HTML+Tailwind):

// - **Shared Shell**  
//   - **Banner**: full-width car image background, overlaid centered `brand-logo.svg` and title **“Thank you for shopping with us!”**  
//     - Title styling: uppercase, text-2xl mobile → text-3xl md → text-4xl lg, font-semibold, white.  
//   - **No sidebar** on this post-purchase page.  
//   - **Breadcrumb** under banner (optional): “Home > Thank you” in small, gray-400.

// - **Content Card** (centered, max-width `md:max-w-lg` on mobile → `lg:max-w-xl`, `bg-gray-900`, rounded-2xl, shadow-lg, p-6 mobile → p-8 md → p-12 lg):
//   1. **Header**  
//      - Left: **DELIVER TO** label (uppercase, text-sm, gray-300)  
//      - Under it, recipient info (white, text-base):
//        ```
//        Kseniiia Melnyk  
//        Street 1, City, State, ZIP code, Country  
//        (888) 000-0000
//        ```  
//      - Right (on md/lg side-by-side, mobile stacked): **PAYMENT METHOD** label + masked card “**** **** **** 8888” and `mastercard.svg` logo.
//   2. **Order Details** block:
//      - Divider line (border-gray-700, my-4).  
//      - Title row: **ORDER DETAILS #12345** (uppercase, text-sm, gray-400) on left, date **“21 July 2024”** (text-sm, gray-400) on right.  
//      - For each item:
//        - Thumbnail (64×64) on left.  
//        - In the middle:  
//          - **Title name of part** (text-base, white)  
//          - “Ford Bronco 1991” (text-sm, gray-300)  
//          - “4.9L” (text-sm, gray-300)  
//          - “from 2/3/91 (AIR inner manifold)” (text-sm, gray-300)  
//          - “E4OD transmission” (text-sm, gray-300)  
//          - “1 pc.” (text-sm, gray-300)  
//        - On right: price **“$800”** (text-base, white)  
//        - After each item: small divider (border-gray-700, my-3).
//   3. **Summary Totals**:
//      - Cart total: **$1600**  
//      - Shipping: **Free Shipping**  
//      - Sales Tax: **$46**  
//      - Divider (border-gray-700, my-4)  
//      - **TOTAL: $1646** (uppercase, text-lg, font-semibold, white)
//   4. **Actions**:
//      - Primary button: **“Track order”** (`bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2 px-6 mt-6`)  
//      - Secondary link: **“Continue shopping”** (text-blue-400 hover:underline ml-4 mt-6 inline-block)
  
// - **Responsiveness**:
//   - On mobile all sections stack vertically with full width.  
//   - On md/lg, header (Deliver To / Payment) is a two-column row; order details and summary remain full-width inside the card.  
//   - Typography scales fluidly: text-sm → text-base → text-lg at breakpoints; padding increases as defined.

// Ensure all text, logos, and placeholders match exactly as specified.```

// Save this snippet as `thank-you.md` and feed it to your code generator.
