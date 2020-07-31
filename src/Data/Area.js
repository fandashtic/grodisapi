const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'areas';
const _primaryKey = 'area_id';

//#region

let GetAreaDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllAreaData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveAreaData = async (area, callback) => {
    area = AddDetaultValues(area, 'area_id', PreFix.Area, area.created_by);
    return await Add(_tableName, area['area_id'], area, callback);
}

let UpdateAreaData = async (key, area, callback) => {
    area = UpdateDetaultValues(area, area.modified_by);
    return await Edit(_tableName,  key, area, callback);
}

let DeleteAreaData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetAreaDataById, GetAllAreaData, SaveAreaData, UpdateAreaData, DeleteAreaData };

//#endregion