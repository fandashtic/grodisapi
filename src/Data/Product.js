const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'products';
const _primaryKey = 'product_id';

//#regions

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (product, callback) => {
    product = AddDetaultValues(product, 'product_id', PreFix.Product, product.created_by);
    return await Add(_tableName, product['product_id'], product, callback);
}

let Update = async (key, product, callback) => {
    product = UpdateDetaultValues(product, product.modified_by);
    return await Edit(_tableName,  key, product, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion