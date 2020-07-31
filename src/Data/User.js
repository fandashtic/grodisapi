const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues, CreatePassword, CreatePasswordSalt, 
    //IsHasValue
 } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'users';
const _primaryKey = 'user_id';

//#region

let GetUserDataById = async (user_id, callback) => {
    return await Get(_tableName, _primaryKey, user_id, callback);
};

let GetAllUserData = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveUserData = async (user, callback) => {
    user = AddDetaultValues(user, 'user_id', PreFix.User, user.created_by);
    let _password = CreatePassword();
    let _password_salt = CreatePasswordSalt();
    user['password'] = CreatePassword(_password, _password_salt);
    user['password_salt'] = _password_salt;
    return await Add(_tableName, user['user_id'], user, callback);
}

let UpdateUserData = async (user_id, user, callback) => {
    user = UpdateDetaultValues(user, user.modified_by);
    return await Edit(_tableName, user_id, user, callback);
}

let DeleteUserData = async (user_id, callback) => {
    return await Remove(_tableName, _primaryKey, user_id, callback);
};

module.exports = { GetUserDataById, GetAllUserData, SaveUserData, UpdateUserData, DeleteUserData };

//#endregion