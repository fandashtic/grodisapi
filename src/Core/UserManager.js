const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/User');
const { InsertLog } = require('./../Data/SessionLog');
const { GetNewKey, IsHasValue, GetDate, ComparePassword, CreatePassword } = require('./../Shared/Util');

let IsUserVerified = async (user_name, password, callback) => {
    return await GetbyColumn(user_name, 'user_name', async (userExists) => {        
        if (IsHasValue(userExists) && ComparePassword(password, userExists.password_salt, userExists.password)) {
            let _session = {
                session_token: GetNewKey(),
                session_date: GetDate()
            }
            AddSessionLog(userExists.user_id + GetNewKey(), _session);
            return await callback({
                'data': {
                    UserName: userExists.user_name,
                    UserDisplayName: userExists.first_name + ' ' + userExists.last_name,
                    UserType: userExists.user_type,
                    CompanyId: userExists.company_id,
                    store_id: IsHasValue(userExists.store_id)? userExists.store_id: 0,
                    UserProfileImage: IsHasValue(userExists.profileImageUrl) ? userExists.profileImageUrl: 'image.png',
                    Session_Token: _session.session_token
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let IsUserValid = async (user_name) => {
    return await GetbyColumn(user_name, 'user_name', async (user) => {
        if (user) {
            return false;
        } else {
            return true;
        }
    });
};

let AddSessionLog = (session_id, session) => {
    InsertLog(session_id, session, async (session) => {

    });
}

let AddUser = async (user, callback) => {
    return await Save(user, async (user) => {
        if (user) {
            //TODO: Send Confirmation email to user.

            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let UpdateUser = async (key, user, callback) => {
    return await Update(key, user, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let DeleteUser = async (key, callback) => {
    return await Delete(key, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let GetUser = async (user_id, callback) => {
    return await GetById(user_id, async (user) => {
        if (user) {
            return await callback({
                'data': user,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let ChangePassword = async (user_id, new_password, old_password, callback) => {
    return await GetbyColumn(user_id, 'user_id', async (userExists) => {
        if (IsHasValue(userExists) && ComparePassword(old_password, userExists.password_salt, userExists.password)) {
            userExists.password = CreatePassword(new_password, userExists.password_salt);
            return await Update(user_id, userExists, async (user) => {
                if (user) {
                    //TODO: Send Confirmation email to user.

                    return await callback({
                        'data': user,
                        'Status': 200
                    })
                } else {
                    return await callback({
                        'data': "Error on update new password. Please try again later.",
                        'Status': 401
                    })
                }
            });
        } else {
            return await callback({
                'data': "Password is not match",
                'Status': 401
            })
        }
    });
}

let GetAllUsers = async (filter, callback) => {
    return await GetAll(filter, async (users) => {
        if (users) {
            return await callback({
                'data': users,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

module.exports = { IsUserValid, IsUserVerified, AddUser, UpdateUser, DeleteUser, GetUser, GetAllUsers, ChangePassword };