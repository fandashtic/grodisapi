const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'cities';
const _primaryKey = 'city_id';

//#region

let GetCityDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllCityData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveCityData = async (city, callback) => {
    city = AddDetaultValues(city, 'city_id', PreFix.City, city.created_by);
    return await Add(_tableName, city['city_id'], city, callback);
}

let UpdateCityData = async (key, city, callback) => {
    city = UpdateDetaultValues(city, city.modified_by);
    return await Edit(_tableName,  key, city, callback);
}

let DeleteCityData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetCityDataById, GetAllCityData, SaveCityData, UpdateCityData, DeleteCityData };

//#endregion