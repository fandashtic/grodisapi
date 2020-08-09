const{ GetUser, GetAllUsers, IsUserVerified, IsUserValid, AddUser, UpdateUser, DeleteUser, ChangePassword, UserLookUp } = require('./../../Core/UserManager');

const IsUserValidAPI = async (user_name, password, callback) => {
    return await IsUserValid(user_name, password, callback);
};

const AddUserAPI = async (user, callback) => {
    return await AddUser(user, callback);
};

const UpdateUserAPI = async (user_id, user, callback) => {
    return await UpdateUser(user_id, user, callback);
};

const DeleteUserAPI = async (user_id, callback) => {
    return await DeleteUser(user_id, callback);
};

const GetUserAPI = async (user_id, callback) => {
    return await GetUser(user_id, callback);
};

const GetUsersAPI = async (filter, callback) => {
    return await GetAllUsers(filter, callback);
};

let UserLookUpAPI = async (filter, callback) => {
    return await UserLookUp(filter, callback);
};

const IsUserVerifiedAPI = async (user_name, password, callback) => {
    return await IsUserVerified(user_name, password, callback);
};

const ChangePasswordAPI = async (user_id, new_password, old_password, callback) => {
    return await ChangePassword(user_id, new_password, old_password, callback);
};

module.exports = { IsUserValidAPI, AddUserAPI, UpdateUserAPI, DeleteUserAPI, GetUserAPI, GetUsersAPI, UserLookUpAPI, IsUserVerifiedAPI, ChangePasswordAPI };