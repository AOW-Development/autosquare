// ## Prompt for “Engine Assembly” Product Section

// >Create a dark-mode product detail panel in Next.js + Tailwind CSS that’s fully responsive (mobile → md → lg → xl).  
// >
// >- **Layout**: Two-column on md+ (left: image gallery; right: details); single-column on sm.  
// >- **Left column (Gallery)**:  
// >  - Three small vertical thumbnails on the left (stacked).  
// >  - Main engine image on the right (large).  
// >  - Caption below main image: “*Stock image”.  
// >
// >- **Right column (Details)**:  
// >  - **Heading** (uppercased, small tracking): “NAME ENGINE ASSEMBLY”  
// >  - **Subheading** (smaller, regular weight): “Option fits: 4.9L (from 2/3/91) (AIR inner manifold) E4OD transmission”  
// >  - **Select** dropdown (full width on sm, inline-block on md)  
// >    - Default placeholder: “Select option…”  
// >    - Options:
// >      1. “4.9L (VIN Y, 8th digit) from 2/3/91 (AIR inner manifold) E4OD transmission”  
// >      2. “4.9L (VIN Y, 8th digit) from 2/3/91 (AIR inner manifold) w/o E4OD transmission”  
// >      3. “4.9L (VIN Y, 8th digit) thru 2/2/91 (AIR inner head) E4OD transmission”  
// >      4. “4.9L (VIN Y, 8th digit) thru 2/2/91 (AIR inner head) w/o E4OD transmission”  
// >      5. “5.0L (VIN N, 8th digit)”  
// >  - **Availability** line: “Availability: 2 parts in stock”  
// >  - **Price**:  
// >    - Current: “100$” (large, bold)  
// >    - Previous: “100$” (strikethrough, lighter)  
// >  - **Buttons** (inline on md+, stacked on sm):  
// >    - Primary (filled blue): “Add to cart”  
// >    - Secondary (outline): “Buy in one click”  
// >  - **Accordions** (collapsed by default):  
// >    1. Payment  
// >    2. Delivery  
// >    3. Warranty (expanded by default):
// >       > You may return any item in its original condition for a full refund within 30 days of receipt of your shipment, less shipping charges. It typically takes us approximately 3–5 business days to process a credit back to your account and 2–3 business days for the credit to appear on your account.  
// >       > Engine warranties are limited to manufacturing defects in the block, heads, pistons, crankshafts, camshafts, rockers, and oil pumps.
// >```

// ```markdown
// ## Prompt for “Description” Table Section

// >Create a dark-mode data table in Next.js + Tailwind CSS that’s fully responsive (mobile → md → lg → xl).  
// >
// >- **Section heading** (uppercase, wide tracking): “DESCRIPTION”  
// >- **Table**: full width, border around each cell, two columns (label left, value right), stacked on mobile.  
// >  1. **Make**  | Volvo  
// >  2. **Model** | XC60  
// >  3. **Years** | 2018  
// >  4. **Part**  | Engine Assembly  
// >  5. **Miles** | 80K  
// >  6. **Genuine** | Genuine Dodge Part  
// >  7. **Condition** | Excellent Condition  
// >  8. **Warranty** | 60 Days Warranty  
// >
// >- On sm screens, show each label/value pair as its own row. On md+, use a single bordered table.  
// >- Text: white on dark background; borders and header accent in electric blue.
// >
// >- Ensure spacing: at least p-4 on the container, p-2 on cells, and consistent row height.
