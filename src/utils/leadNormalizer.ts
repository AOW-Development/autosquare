// Field name mapping for Meta webhook fields to standard field names
const fieldMapping: Record<string, string[]> = {
  customer_name: ['customer_name', 'full_name', 'name'],
  mobile: ['mobile', 'phone_number', 'phone', 'user_provided_phone_number'],
  part: ['part', 'vehicle_part', 'product_interest', 'what_auto_part_are_you_looking_for', 'auto_part', 'parts'],
  lead_source: ['lead_source', 'source'],
  created_by: ['created_by', 'lead_owner'],
  status: ['status'],
  created_date: ['created_date', 'modified_date', 'date', 'created_time'],
  make: ['make', 'conditional_question_1', 'vehicle_make'],
  model: ['model', 'conditional_question_2', 'vehicle_model'],
  year: ['year', 'vehicle_year', 'conditional_question_3'],
  email: ['email'],
  vin_number: ['vin_number', 'vin'],
  product_notes: ['product_notes', 'notes'],
  specification: ['specification', 'engine_size'],
  warranty: ['warranty'],
  miles_promised: ['miles_promised', 'miles'],
  selling_price: ['selling_price', 'price'],
  shipping_type: ['shipping_type'],
  shipping_address: ['shipping_address', 'address'],
  billing_address: ['billing_address'],
  note: ['note', 'notes'],
  zipcode: ['zipcode', 'zip_code', 'postal_code'],
  location: ['location', 'city', 'state'],
  transmission: ['transmission', 'choose_transmission'],
};

export function getLeadFieldValue(leadData: any, key: string): string {
  const possibleKeys = fieldMapping[key] || [key];

  // Meta webhook format (array)
  if (Array.isArray(leadData)) {
    for (const possibleKey of possibleKeys) {
      const field = leadData.find((f: any) => f.name === possibleKey);
      if (field?.values?.[0]) {
        return String(field.values[0]).trim();
      }
    }
    return '';
  }

  // Manual object format
  for (const possibleKey of possibleKeys) {
    if (leadData?.[possibleKey]) {
      return String(leadData[possibleKey]).trim();
    }
  }

  return '';
}

export function normalizeLeadData(leadData: any): Record<string, string> {
  const normalized: Record<string, string> = {};

  Object.keys(fieldMapping).forEach(key => {
    normalized[key] = getLeadFieldValue(leadData, key);
  });

  normalized.lead_id =
    leadData?.lead_id ||
    leadData?.id ||
    '';

  return normalized;
}
