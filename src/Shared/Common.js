const { SaveUserData } = require('./../Data/User');
const { ApplicationType, PreFix } = require('./../Shared/Constant/Enum');
const { GetNewKey, CreatePassword, CreatePasswordSalt, IsHasValue } = require('./../Shared/Util');

let CreateDynamicUser = (sourceData, type) => {
    let user = {};
    let _password = CreatePassword();
    let _password_salt = CreatePasswordSalt();
    user['user_id'] = GetNewKey(PreFix.User);
    user['email_id'] = sourceData.email_id;
    user['user_name'] = sourceData.email_id;
    user['password_salt'] = _password_salt;
    user['password'] = CreatePassword(_password, _password_salt);
    user['first_name'] = sourceData.email_id;
    user['last_name'] = sourceData.email_id;

    if (type === ApplicationType.Company) {
        user['user_type'] = PreFix.UserType.COMPANY_ADMIN;
        user['company_id'] = sourceData.company_id;
        user['company_name'] = sourceData.company_name;
    }

    if (type === ApplicationType.Store) {
        user['user_type'] = PreFix.UserType.STORE_ADMIN;
        user['store_id'] = sourceData.store_id;
        user['store_name'] = sourceData.store_name;
    }

    user['profile_image_url'] = sourceData.profile_image_url;

    SaveUserData(user, (data, err) => {
        if (IsHasValue(data)) {
            console.log('Admin User Created Successfully!');
            alert('User Created Successfully!', user.user_name, user.password);
            //TODO: Send Confirmation email to user.
        }
    });
}

module.exports = { CreateDynamicUser };