const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'areas';
const _primaryKey = 'area_id';

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

let Save = async (area, callback) => {
    area = AddDetaultValues(area, 'area_id', PreFix.Area, area.created_by);
    return await Add(_tableName, area['area_id'], area, callback);
}

let Update = async (key, area, callback) => {
    area = UpdateDetaultValues(area, area.modified_by);
    return await Edit(_tableName,  key, area, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion