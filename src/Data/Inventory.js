const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'inventories';
const _primaryKey = 'inventory_id';

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

let Save = async (inventory, callback) => {
    inventory = AddDetaultValues(inventory, 'inventory_id', PreFix.Inventory, inventory.created_by);
    return await Add(_tableName, inventory['inventory_id'], inventory, callback);
}

let Update = async (key, inventory, callback) => {
    inventory = UpdateDetaultValues(inventory, inventory.modified_by);
    return await Edit(_tableName,  key, inventory, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion