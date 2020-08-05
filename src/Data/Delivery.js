const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'deliveries';
const _primaryKey = 'delivery_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (delivery_id, callback) => {
    return await Get(_tableName, delivery_id, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (delivery, callback) => {
    delivery = AddDetaultValues(delivery, 'delivery_id', PreFix.Delivery, delivery.created_by);
    return await Add(_tableName, delivery['delivery_id'], delivery, callback);
}

let Update = async (key, delivery, callback) => {
    delivery = UpdateDetaultValues(delivery, delivery.modified_by);
    return await Edit(_tableName,  key, delivery, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion