const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'orders';
const _primaryKey = 'order_id';

//#region

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (order, callback) => {
    order = AddDetaultValues(order, 'order_id', PreFix.Order, order.created_by);
    return await Add(_tableName, order['order_id'], order, callback);
}

let Update = async (key, order, callback) => {
    order = UpdateDetaultValues(order, order.modified_by);
    return await Edit(_tableName,  key, order, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetById, GetAll, Save, Update, Delete };

//#endregion