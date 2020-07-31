const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'stores';
const _primaryKey = 'store_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (store, callback) => {
    store = AddDetaultValues(store, 'store_id', PreFix.Store, store.created_by);
    return await Add(_tableName, store['store_id'], store, callback);
}

let Update = async (key, store, callback) => {
    store = UpdateDetaultValues(store, store.modified_by);
    return await Edit(_tableName,  key, store, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetById, GetAll, Save, Update, Delete };

//#endregion