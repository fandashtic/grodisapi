const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'countries';
const _primaryKey = 'country_id';

//#region

let GetCountryDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllCountryData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveCountryData = async (country, callback) => {
    country = AddDetaultValues(country, 'country_id', PreFix.Country, country.created_by);
    return await Add(_tableName, country['country_id'], country, callback);
}

let UpdateCountryData = async (key, country, callback) => {
    country = UpdateDetaultValues(country, country.modified_by);
    return await Edit(_tableName,  key, country, callback);
}

let DeleteCountryData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetCountryDataById, GetAllCountryData, SaveCountryData, UpdateCountryData, DeleteCountryData };

//#endregion