const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'productcategories';
const _primaryKey = 'product_category_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (productcategory, callback) => {
    productcategory = AddDetaultValues(productcategory, 'product_category_id', PreFix.ProductCategory, productcategory.created_by);
    return await Add(_tableName, productcategory['product_category_id'], productcategory, callback);
}

let Update = async (key, productcategory, callback) => {
    productcategory = UpdateDetaultValues(productcategory, productcategory.modified_by);
    return await Edit(_tableName,  key, productcategory, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion