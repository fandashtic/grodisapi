let Product = {
    product_id: String,
    product_name: String,
    manufacture_id: String,
    manufacture_name: String,
    brand_id: String,
    brand_name: String,
    product_category_id: String,
    product_category_name: String,
    product_family_id: String,
    product_family_name: String,
    description: String,
    company_id: String,
    company_name: String,
    store_id: String,
    store_name: String,
    profile_image_url: String,
    status: Boolean,
    created_on: Date,
    created_by: String,
    modified_on: Date,
    modified_by: String
}

let Product_Lookup = {
    product_id: String,
    product_name: String,
    manufacture_id: String,
    brand_id: String,
    product_category_id: String,
    product_family_id: String,
    company_id: String,
    company_name: String,
    store_id: String,
    store_name: String,
    manufactures: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    brands: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    product_categories: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    product_families: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    description: String,
    company: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    store: [{ label: '', value: '', isSelected: true }, { label: '', value: '', isSelected: false }],
    profile_image_url: String,
    status: Boolean
}

module.exports = { Product, Product_Lookup };