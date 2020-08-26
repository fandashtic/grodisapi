const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues, CreateRandomPassword, CreatePassword, CreatePasswordSalt, 
    GetEmailKey
 } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'users';
const _primaryKey = 'user_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (user_id, callback) => {
    return await Get(_tableName, user_id, callback);
};


let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (user, callback) => {    
    user = AddDetaultValues(user, 'user_id', PreFix.User, user.created_by);
    user['user_id'] = GetEmailKey(user.email_id);
    let _password = 'Fandashtic@123'; //CreateRandomPassword();
    let _password_salt = CreatePasswordSalt();
    user['password'] = CreatePassword(_password, _password_salt);
    user['password_salt'] = _password_salt;
    return await Add(_tableName, user['user_id'], user, callback);
}

let Update = async (user_id, user, callback) => {
    user = UpdateDetaultValues(user, user.modified_by);
    return await Edit(_tableName, user_id, user, callback);
}

let Delete = async (user_id, callback) => {
    return await Remove(_tableName, user_id, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion