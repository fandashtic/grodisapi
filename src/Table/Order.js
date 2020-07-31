let Order = {
    order_id: String,
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

module.exports = { Order };