const { GetUserDataById, GetAllUserData, SaveUserData, UpdateUserData, DeleteUserData } = require('./../Data/User');
const { InsertLog } = require('./../Data/SessionLog');
const { GetNewKey, IsHasValue, GetDate, ComparePassword, CreatePassword } = require('./../Shared/Util');

let IsUserValid = async (userName, password, callback) => {
    let filter = {
        'user_name': userName
    };

    return await GetAllUserData(filter, async (users) => {
        let userExists = users.filter(function (o) { return o.user_name === userName; });
        if (IsHasValue(userExists) && userExists.length > 0 && ComparePassword(password, userExists[0].password_salt, userExists[0].password)) {
            let _session = {
                session_token: GetNewKey(),
                session_date: GetDate()
            }
            AddSessionLog(userExists[0].user_id + GetNewKey(), _session);
            return await callback({
                'data': {
                    UserName: userExists[0].userName,
                    UserDisplayName: userExists[0].firstName + ' ' + userExists[0].lastName,
                    UserType: userExists[0].userType,
                    CompanyId: userExists[0].companyId,
                    store_id: userExists[0].store_id,
                    UserProfileImage: userExists[0].profileImageUrl,
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

let AddSessionLog = (session_id, session) => {
    InsertLog(session_id, session, async (session) => {

    });
}

let AddUser = async (user, callback) => {
    return await SaveUserData(user, async (user) => {
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
    return await UpdateUserData(key, user, async (user) => {
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
    return await DeleteUserData(key, async (user) => {
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

let GetUser = async (userName, callback) => {
    return await GetUserDataById(userName, async (user) => {
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
    let filter = {
        'user_id': user_id
    };

    return await GetAllUserData(filter, async (users) => {
        let userExists = users.filter(function (o) { return o.user_id === user_id; });
        if (IsHasValue(userExists) && userExists.length > 0 && ComparePassword(old_password, userExists[0].password_salt, userExists[0].password)) {
            userExists[0].password = CreatePassword(new_password, userExists[0].password_salt);
            return await UpdateUserData(user_id, userExists[0], async (user) => {
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
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let GetAllUsers = async (filter, callback) => {
    return await GetAllUserData(filter, async (users) => {
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

module.exports = { IsUserValid, AddUser, UpdateUser, DeleteUser, GetUser, GetAllUsers, ChangePassword };