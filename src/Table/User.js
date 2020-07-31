let User = {
    user_id: String,
    email_id: String,
    user_name: String,
    password: String,
    first_name: String,
    last_name: String,
    user_type: String,
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

module.exports = { User };