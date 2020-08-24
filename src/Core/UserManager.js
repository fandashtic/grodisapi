const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/User');
const { InsertLog } = require('./../Data/SessionLog');
const { SendUserRegistationEmail } = require('./../Shared/Common');
const { GetNewKey, GetEmailKey, IsHasValue, GetDate, ComparePassword, CreatePassword, ReturnObject, GetLookUpData } = require('./../Shared/Util');

let IsUserVerified = async (user_name, password, callback) => {
    return await GetbyColumn(user_name, 'user_name', async (userExists) => {        
        if (IsHasValue(userExists) && ComparePassword(password, userExists.password_salt, userExists.password)) {
            let _session = {
                session_token: GetNewKey(),
                session_date: GetDate()
            }
            //AddSessionLog(userExists.user_id + GetNewKey(), _session);
            return await callback({
                'data': {
                    UserName: userExists.user_name,
                    UserDisplayName: userExists.first_name + ' ' + userExists.last_name,
                    UserType: userExists.user_type,
					user_id: userExists.user_id,
                    company_id: userExists.company_id,
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
    InsertLog(session_id, session, (res) => {

    });
}

let AddUser = async (user, callback) => {
    return await GetById(GetEmailKey(user.email_id), async (data, err) => {
        if (IsHasValue(err)) {
            return await Save(user, async (user) => {
                if (user) {
                    //TODO: Send Confirmation email to user.
                    SendUserRegistationEmail(user, callback);
                } else {
                    return await callback({
                        'data': null,
                        'Status': 401
                    })
                }
            });
        } else {
            return await callback({
                'data': "User Email already exists!",
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

let UserLookUp = async (user_id, callback) => {
    if (IsHasValue(user_id)) {
        return await GetById(user_id, async (user) => {
            if (IsHasValue(user)) {
                return await GetUserHierarchyData(user, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetUserHierarchyData(null, callback);
    }
}

const GetUserHierarchyData = async (user, callback) => {
    let _lookup = {};
    if (IsHasValue(user)) {
        _lookup.user_id= user.user_id;
        _lookup.email_id= user.email_id;
        _lookup.user_name= user.user_name;
        _lookup.password= user.password;
        _lookup.first_name= user.first_name;
        _lookup.last_name= user.last_name;
        _lookup.user_type= user.user_type;
        _lookup.company_id = user.company_id;
        _lookup.company_name = user.company_name;
        _lookup.store_id = user.store_id;
        _lookup.store_name = user.store_name;
        _lookup.profile_image_url = user.profile_image_url;
        _lookup.status = user.status;
        _lookup.pincode = user.pincode;
        _lookup.latitude = user.latitude;
        _lookup.longitude = user.longitude;
    }

    return await ReturnObject(callback, null, _lookup, 'GetUserHierarchyData');
}

module.exports = { IsUserValid, IsUserVerified, AddUser, UpdateUser, DeleteUser, GetUser, GetAllUsers, ChangePassword, UserLookUp };