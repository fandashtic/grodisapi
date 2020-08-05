const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'carts';
const _primaryKey = 'cart_id';

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

let Save = async (cart, callback) => {
    cart = AddDetaultValues(cart, 'cart_id', PreFix.Cart, cart.created_by);
    return await Add(_tableName, cart['cart_id'], cart, callback);
}

let Update = async (key, cart, callback) => {
    cart = UpdateDetaultValues(cart, cart.modified_by);
    return await Edit(_tableName,  key, cart, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion