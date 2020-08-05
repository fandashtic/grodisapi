const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'productfamilies';
const _primaryKey = 'product_family_id';

//#regionProductFamilyData

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (key, callback) => {
    return await Get(_tableName, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (productFamily, callback) => {
    productFamily = AddDetaultValues(productFamily, 'product_family_id', PreFix.ProductFamily, productFamily.created_by);
    return await Add(_tableName, productFamily['product_family_id'], productFamily, callback);
}

let Update = async (key, productFamily, callback) => {
    productFamily = UpdateDetaultValues(productFamily, productFamily.modified_by);
    return await Edit(_tableName,  key, productFamily, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion