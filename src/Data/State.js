const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'states';
const _primaryKey = 'state_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (state_id, callback) => {
    return await Get(_tableName, state_id, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (state, callback) => {
    state = AddDetaultValues(state, 'state_id', PreFix.State, state.created_by);
    return await Add(_tableName, state['state_id'], state, callback);
}

let Update = async (state_id, state, callback) => {
    state = UpdateDetaultValues(state, state.modified_by);
    return await Edit(_tableName,  state_id, state, callback);
}

let Delete = async (state_id, callback) => {
    return await Remove(_tableName, _primaryKey, state_id, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion