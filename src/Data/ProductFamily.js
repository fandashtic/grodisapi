const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'productfamilies';
const _primaryKey = 'product_family_id';

//#regionProductFamilyData

let GetProductFamilyDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllProductFamiliesData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveProductFamilyData = async (productFamily, callback) => {
    productFamily = AddDetaultValues(productFamily, 'product_family_id', PreFix.ProductFamily, productFamily.created_by);
    return await Add(_tableName, productFamily['product_family_id'], productFamily, callback);
}

let UpdateProductFamilyData = async (key, productFamily, callback) => {
    productFamily = UpdateDetaultValues(productFamily, productFamily.modified_by);
    return await Edit(_tableName,  key, productFamily, callback);
}

let DeleteProductFamilyData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetProductFamilyDataById, GetAllProductFamiliesData, SaveProductFamilyData, UpdateProductFamilyData, DeleteProductFamilyData };

//#endregion