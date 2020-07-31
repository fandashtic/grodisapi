const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'productcategories';
const _primaryKey = 'product_category_id';

//#region

let GetProductCategoryDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllProductCategoriesData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveProductCategoryData = async (productcategory, callback) => {
    productcategory = AddDetaultValues(productcategory, 'product_category_id', PreFix.ProductCategory, productcategory.created_by);
    return await Add(_tableName, productcategory['product_category_id'], productcategory, callback);
}

let UpdateProductCategoryData = async (key, productcategory, callback) => {
    productcategory = UpdateDetaultValues(productcategory, productcategory.modified_by);
    return await Edit(_tableName,  key, productcategory, callback);
}

let DeleteProductCategoryData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetProductCategoryDataById, GetAllProductCategoriesData, SaveProductCategoryData, UpdateProductCategoryData, DeleteProductCategoryData };

//#endregion