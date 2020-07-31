
const{ ProductCategoryLookUp, 
    //IsProductCategoryValid, 
    AddProductCategory, UpdateProductCategory, DeleteProductCategory, GetProductCategory, GetAllProductCategories } = require('./../../Core/ProductCategoryManager');

let AddProductCategoryAPI = async (productCategory, callback) => {
    return await AddProductCategory(productCategory, callback);
};

let UpdateProductCategoryAPI = async (product_category_id, productCategory, callback) => {
    return await UpdateProductCategory(product_category_id, productCategory, callback);
};

let DeleteProductCategoryAPI = async (product_category_id, callback) => {
    return await DeleteProductCategory(product_category_id, callback);
};

let GetProductCategoriesAPI = async (filter, callback) => {
    return await GetAllProductCategories(filter, callback);
};

let GetProductCategoryAPI = async (product_category_id, callback) => {
    return await GetProductCategory(product_category_id, callback);
};

let ProductCategoryLookUpAPI = async (product_category_id, callback) => {
    return await ProductCategoryLookUp(product_category_id, callback);
};

module.exports = { GetProductCategoryAPI, ProductCategoryLookUpAPI, AddProductCategoryAPI, UpdateProductCategoryAPI, DeleteProductCategoryAPI, GetProductCategoriesAPI };