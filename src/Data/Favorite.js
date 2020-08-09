const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'favorite';
const _primaryKey = 'favorite_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (favorite_id, callback) => {
    return await Get(_tableName, favorite_id, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (favorite, callback) => {
    favorite = AddDetaultValues(favorite, 'favorite_id', PreFix.Favorite, favorite.created_by);
    return await Add(_tableName, favorite['favorite_id'], favorite, callback);
}

let Update = async (key, favorite, callback) => {
    favorite = UpdateDetaultValues(favorite, favorite.modified_by);
    return await Edit(_tableName,  key, favorite, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion