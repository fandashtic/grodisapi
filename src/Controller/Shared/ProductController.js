const{ 
   // IsProductValid, 
    SaveProduct, UpdateProduct, DeleteProduct, GetProduct, GetAllProducts, ProductLookUp } = require('./../../Core/ProductManager');

let AddProductAPI = async (product, callback) => {
    return await SaveProduct(product, callback);
};

let UpdateProductAPI = async (product_id, product, callback) => {
    return await UpdateProduct(product_id, product, callback);
};

let DeleteProductAPI = async (product_id, callback) => {
    return await DeleteProduct(product_id, callback);
};

let GetProductsAPI = async (filter, callback) => {
    return await GetAllProducts(filter, callback);
};

let GetProductAPI = async (product_id, callback) => {
    return await GetProduct(product_id, callback);
};

let ProductLookUpAPI = async (product_id, callback) => {
    return await ProductLookUp(product_id, callback);
};

module.exports = { AddProductAPI, UpdateProductAPI, DeleteProductAPI, GetProductsAPI, GetProductAPI, ProductLookUpAPI };