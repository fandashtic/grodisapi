const { Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const { AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const { PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'manufactures';
const _primaryKey = 'manufacture_id';

//#region ManufactureData

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (key, callback) => {
    return await Get(_tableName, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (manufacture, callback) => {
    manufacture = AddDetaultValues(manufacture, 'manufacture_id', PreFix.Manufacture, manufacture.created_by);
    return await Add(_tableName, manufacture['manufacture_id'], manufacture, callback);
}

let Update = async (key, manufacture, callback) => {
    manufacture = UpdateDetaultValues(manufacture, manufacture.modified_by);
    return await Edit(_tableName,  key, manufacture, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion