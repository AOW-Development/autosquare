const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

// Configuration
const INPUT_FILE = 'feed-file-fixed-cat.xml';
const OUTPUT_FILE = 'output_feed.xml';

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
 * Process feed using streaming approach
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
  
  let inItem = false;
  let itemBuffer = [];
  let itemData = {};
  let processedCount = 0;
  let lineCount = 0;
  
  for await (const line of rl) {
    lineCount++;
    
    // Check if we're entering an item
    if (line.trim() === '<item>') {
      inItem = true;
      itemBuffer = [line];
      itemData = {};
      continue;
    }
    
    // Check if we're exiting an item
    if (line.trim() === '</item>') {
      inItem = false;
      
      // Generate custom labels
      const customLabel0 = generateCustomLabel0(
        itemData.final_price,
        itemData.availability,
        itemData.brand
      );
      const customLabel1 = `${itemData.brand}-${itemData.model}`;
      const customLabel2 = `${itemData.brand}-${itemData.part}`;
      const customLabel3 = `${itemData.brand}-xml`;
      
      // Write the buffered item with custom labels
      outputStream.write(itemBuffer.join('\n') + '\n');
      outputStream.write(`      <g:custom_label_0>${customLabel0}</g:custom_label_0>\n`);
      outputStream.write(`      <g:custom_label_1>${customLabel1}</g:custom_label_1>\n`);
      outputStream.write(`      <g:custom_label_2>${customLabel2}</g:custom_label_2>\n`);
      outputStream.write(`      <g:custom_label_3>${customLabel3}</g:custom_label_3>\n`);
      outputStream.write(line + '\n');
      
      processedCount++;
      
      if (processedCount % 10000 === 0) {
        console.log(`Processed ${processedCount} items...`);
      }
      
      continue;
    }
    
    // If we're inside an item, buffer the line and extract data
    if (inItem) {
      itemBuffer.push(line);
      
      // Extract relevant fields
      const brand = extractTagValue(line, 'brand');
      const model = extractTagValue(line, 'model');
      const part = extractTagValue(line, 'part');
      const finalPrice = extractTagValue(line, 'final_price');
      const availability = extractTagValue(line, 'availability');
      
      if (brand) itemData.brand = brand;
      if (model) itemData.model = model;
      if (part) itemData.part = part;
      if (finalPrice) itemData.final_price = finalPrice;
      if (availability) itemData.availability = availability;
    } else {
      // Write non-item lines directly
      outputStream.write(line + '\n');
    }
  }
  
  outputStream.end();
  
  await new Promise((resolve) => {
    outputStream.on('finish', resolve);
  });
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`\nTotal processed: ${processedCount} items`);
  console.log(`Total lines: ${lineCount}`);
  console.log(`✓ Successfully processed feed in ${duration} seconds!`);
  console.log(`✓ Output saved to: ${OUTPUT_FILE}`);
}

// Run the processor
processFeed().catch(error => {
  console.error('Error processing feed:', error);
  process.exit(1);
});