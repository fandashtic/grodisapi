const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'payments';
const _primaryKey = 'payment_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (payment, callback) => {
    payment = AddDetaultValues(payment, 'payment_id', PreFix.Payment, payment.created_by);
    return await Add(_tableName, payment['payment_id'], payment, callback);
}

let Update = async (key, payment, callback) => {
    payment = UpdateDetaultValues(payment, payment.modified_by);
    return await Edit(_tableName,  key, payment, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion