const { Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const { AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const { PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'manufactures';
const _primaryKey = 'manufacture_id';

//#region ManufactureData

let GetManufactureDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllManufactureData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveManufactureData = async (manufacture, callback) => {
    manufacture = AddDetaultValues(manufacture, 'manufacture_id', PreFix.Manufacture, manufacture.created_by);
    return await Add(_tableName, manufacture['manufacture_id'], manufacture, callback);
}

let UpdateManufactureData = async (key, manufacture, callback) => {
    manufacture = UpdateDetaultValues(manufacture, manufacture.modified_by);
    return await Edit(_tableName,  key, manufacture, callback);
}

let DeleteManufactureData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetManufactureDataById, GetAllManufactureData, SaveManufactureData, UpdateManufactureData, DeleteManufactureData };

//#endregion