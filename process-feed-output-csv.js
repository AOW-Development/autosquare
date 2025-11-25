const fs = require('fs');
const readline = require('readline');

// Configuration
const INPUT_FILE = 'feed-file-fixed-cat.xml';
const OUTPUT_FILE = 'output_feed.csv';

/**
 * Extract numeric price from string like "1350.00 USD"
 */
function extractPrice(priceString) {
  if (!priceString) return 0;
  const match = priceString.trim().match(/^([\d.]+)/);
  return match ? parseFloat(match[1]) : 0;
}

/**
 * Extract text content from XML tag
 */
function extractTagValue(line, tagName) {
  const regex = new RegExp(`<g:${tagName}>(.+?)</g:${tagName}>`, 'i');
  const match = line.match(regex);
  return match ? match[1].trim() : null;
}

/**
 * Extract text content from regular (non-namespaced) tag
 */
function extractRegularTagValue(line, tagName) {
  const regex = new RegExp(`<${tagName}>(.+?)</${tagName}>`, 'i');
  const match = line.match(regex);
  return match ? match[1].trim() : null;
}

/**
 * Escape CSV field (handles commas, quotes, newlines)
 */
function escapeCSV(field) {
  if (field == null) return '';
  const str = field.toString();
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Generate custom_label_0 based on price and availability
 */
function generateCustomLabel0(finalPrice, availability, brand) {
  const price = extractPrice(finalPrice);
  const inStock = availability === 'In Stock';
  const suffix = inStock ? '' : ' 1';
  
  if (price < 2000) {
    return `${brand}-bl-2000${suffix}`;
  } else if (price >= 2000 && price < 3500) {
    return `${brand}-bl-3500${suffix}`;
  } else if (price >= 3500 && price < 5000) {
    return `${brand}-bl-5000${suffix}`;
  } else {
    return `${brand}-ab-5000${suffix}`;
  }
}

/**
 * Process feed and output CSV
 */
async function processFeed() {
  console.log('Starting processing...');
  const startTime = Date.now();
  
  const inputStream = fs.createReadStream(INPUT_FILE, { encoding: 'utf8' });
  const outputStream = fs.createWriteStream(OUTPUT_FILE, { encoding: 'utf8' });
  
  const rl = readline.createInterface({
    input: inputStream,
    crlfDelay: Infinity
  });
  
  // Write CSV header
  const headers = [
    'id',
    'title',
    'link',
    'description',
    'image_link',
    'availability',
    'price',
    'final_price',
    'condition',
    'brand',
    'model',
    'year',
    'part',
    'mile',
    'option',
    'google_product_category',
    'product_type',
    'custom_label_0',
    'custom_label_1',
    'custom_label_2',
    'custom_label_3'
  ];
  outputStream.write(headers.join(',') + '\n');
  
  let inItem = false;
  let itemData = {};
  let processedCount = 0;
  
  for await (const line of rl) {
    // Check if we're entering an item
    if (line.trim() === '<item>') {
      inItem = true;
      itemData = {};
      continue;
    }
    
    // Check if we're exiting an item
    if (line.trim() === '</item>') {
      inItem = false;
      
      // Generate custom labels
      itemData.custom_label_0 = generateCustomLabel0(
        itemData.final_price,
        itemData.availability,
        itemData.brand
      );
      itemData.custom_label_1 = `${itemData.brand}-${itemData.model}`;
      itemData.custom_label_2 = `${itemData.brand}-${itemData.part}`;
      itemData.custom_label_3 = `${itemData.brand}-xml`;
      
      // Write CSV row
      const row = headers.map(header => escapeCSV(itemData[header] || ''));
      outputStream.write(row.join(',') + '\n');
      
      processedCount++;
      
      if (processedCount % 10000 === 0) {
        console.log(`Processed ${processedCount} items...`);
      }
      
      continue;
    }
    
    // If we're inside an item, extract data
    if (inItem) {
      // Extract g: namespaced fields
      const gFields = [
        'id', 'image_link', 'availability', 'price', 'final_price',
        'condition', 'brand', 'model', 'year', 'part', 'mile', 'option',
        'google_product_category', 'product_type'
      ];
      
      gFields.forEach(field => {
        const value = extractTagValue(line, field);
        if (value) itemData[field] = value;
      });
      
      // Extract regular fields (no namespace)
      const regularFields = ['title', 'link', 'description'];
      regularFields.forEach(field => {
        const value = extractRegularTagValue(line, field);
        if (value) itemData[field] = value;
      });
    }
  }
  
  outputStream.end();
  
  await new Promise((resolve) => {
    outputStream.on('finish', resolve);
  });
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`\nTotal processed: ${processedCount} items`);
  console.log(`✓ Successfully processed feed in ${duration} seconds!`);
  console.log(`✓ CSV output saved to: ${OUTPUT_FILE}`);
}

// Run the processor
processFeed().catch(error => {
  console.error('Error processing feed:', error);
  process.exit(1);
});