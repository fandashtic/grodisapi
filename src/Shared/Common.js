const { Save: SaveUserData } = require('./../Data/User');
const { ApplicationType, PreFix, UserType } = require('./../Shared/Constant/Enum');
const { GetNewKey, ReplaceAll, IsHasValue, ReturnObject } = require('./../Shared/Util');
const { SendEmail } = require('./SendEmail');
var { userRegistationEmailTemplate } = require('./Constant/UserRegistationEmailTemplate');
const config = require('./../../appConfig.json');

let CreateDynamicUser = async (sourceData, type, callback) => {
    let user = {};
    user['user_id'] = GetNewKey(PreFix.User);

    if (IsHasValue(sourceData.email_id)) {
        user['email_id'] = sourceData.email_id;
    }
    if (IsHasValue(sourceData.user_name)) {
        user['user_name'] = sourceData.user_name;
    }
    if (IsHasValue(sourceData.first_name)) {
        user['first_name'] = sourceData.first_name;
    }
    if (IsHasValue(sourceData.last_name)) {
        user['last_name'] = sourceData.last_name;
    }

    if (type === ApplicationType.Company) {
        user['user_type'] = UserType.COMPANY_ADMIN;
        user['company_id'] = sourceData.company_id;
        user['company_name'] = sourceData.company_name;
    }

    if (type === ApplicationType.Store) {
        user['user_type'] = UserType.STORE_ADMIN;
        user['store_id'] = sourceData.store_id;
        user['store_name'] = sourceData.store_name;
    }

    if (IsHasValue(sourceData.profile_image_url)) {
        user['profile_image_url'] = sourceData.profile_image_url;
    }

    await SaveUserData(user, async (user, err) => {
        if (IsHasValue(user)) {
            return await SendUserRegistationEmail(user, callback);
        }
    });
}

let SendUserRegistationEmail = async (user, callback) => {
    console.log(user);
    if (IsHasValue(user)) {
        if (IsHasValue(user.first_name)) {
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[FIRSTNAME]', user.first_name);
        }

        if (IsHasValue(user.last_name)) {
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[LASTNAME]', user.last_name);
        }

        if (IsHasValue(config.CompanyURL)) {
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[COMPANYURL]', config.CompanyURL);
        }

        if (IsHasValue(user.user_name)) {
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[USERNAME]', user.user_name);
        }

        if (IsHasValue(user.password)) {
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[PASSWORD]', user.password);
        }

        if (IsHasValue(user.company_name)) {
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[COMPANYNAME]', user.company_name);
        }else{
            userRegistationEmailTemplate = ReplaceAll(userRegistationEmailTemplate, '[COMPANYNAME]', 'Fandashtic');
        }

        //TODO: Send Confirmation email to user.
        let mailOptions = {
            to: user.email_id,
            subject: 'New User Registation',
            html: userRegistationEmailTemplate
        };
                                                                                   
        SendEmail(mailOptions, (data, err) => {
            if(IsHasValue(data) && IsHasValue(data.accepted) && (data.accepted.length > 0)){
                ReturnObject(callback, err, {'data': 'User Registation Email Send Successfully!', 'Status': 200 }, 'New User Registation');
            }else{
                ReturnObject(callback, err, null, 'New User Registation');
            }
        });
    }
}

module.exports = { CreateDynamicUser, SendUserRegistationEmail };