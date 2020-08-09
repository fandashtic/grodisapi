const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'brands';
const _primaryKey = 'brand_id';

//#region 

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};


let GetById = async (key, callback) => {
    return await Get(_tableName, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (brand, callback) => {
    brand = AddDetaultValues(brand, 'brand_id', PreFix.Brand, brand.created_by);
    return await Add(_tableName, brand['brand_id'], brand, callback);
}

let Update = async (key, brand, callback) => {
    brand = UpdateDetaultValues(brand, brand.modified_by);
    return await Edit(_tableName,  key, brand, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, key, callback);
};


module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion