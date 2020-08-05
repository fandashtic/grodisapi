const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'countries';
const _primaryKey = 'country_id';

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

let Save = async (country, callback) => {
    country = AddDetaultValues(country, 'country_id', PreFix.Country, country.created_by);
    return await Add(_tableName, country['country_id'], country, callback);
}

let Update = async (key, country, callback) => {
    country = UpdateDetaultValues(country, country.modified_by);
    return await Edit(_tableName,  key, country, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion