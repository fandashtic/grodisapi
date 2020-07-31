const{ ProductFamilyLookUp,
     //IsProductFamilyValid, 
     AddProductFamily, UpdateProductFamily, DeleteProductFamily, GetProductFamily, GetAllProductFamilies } = require('./../../Core/ProductFamilyManager');

let AddProductFamilyAPI = async (product_family, callback) => {
    return await AddProductFamily(product_family, callback);
};

let UpdateProductFamilyAPI = async (product_family_id, product_family, callback) => {
    return await UpdateProductFamily(product_family_id, product_family, callback);
};

let DeleteProductFamilyAPI = async (product_family_id, callback) => {
    return await DeleteProductFamily(product_family_id, callback);
};

let GetProductFamiliesAPI = async (filter, callback) => {
    return await GetAllProductFamilies(filter, callback);
};

let GetProductFamilyAPI = async (product_family_id, callback) => {
    return await GetProductFamily(product_family_id, callback);
};

let ProductFamilyLookUpAPI = async (product_family_id, callback) => {
    return await ProductFamilyLookUp(product_family_id, callback);
};


module.exports = { AddProductFamilyAPI, GetProductFamilyAPI, UpdateProductFamilyAPI, DeleteProductFamilyAPI, GetProductFamiliesAPI, ProductFamilyLookUpAPI };