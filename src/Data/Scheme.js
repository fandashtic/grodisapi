const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'schemes';
const _primaryKey = 'scheme_id';

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

let Save = async (scheme, callback) => {
    scheme = AddDetaultValues(scheme, 'scheme_id', PreFix.Scheme, scheme.created_by);
    return await Add(_tableName, scheme['scheme_id'], scheme, callback);
}

let Update = async (key, scheme, callback) => {
    scheme = UpdateDetaultValues(scheme, scheme.modified_by);
    return await Edit(_tableName,  key, scheme, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion