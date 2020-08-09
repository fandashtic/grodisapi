const { Save: SaveUserData } = require('./../Data/User');
const { ApplicationType, PreFix, UserType } = require('./../Shared/Constant/Enum');
const { GetNewKey, CreateRandomPassword, CreatePassword, CreatePasswordSalt, IsHasValue } = require('./../Shared/Util');
const { SendEmail } = require('./SendEmail');
var { userRegistationEmailTemplate } = require('./Constant/UserRegistationEmailTemplate');
const config = require('./../../appConfig.json');

let CreateDynamicUser = async (sourceData, type) => {   
    let user = {};
    user['user_id'] = GetNewKey(PreFix.User);
    user['email_id'] = sourceData.email_id;
    user['user_name'] = sourceData.user_name;
    user['first_name'] = sourceData.contactperson;
    user['last_name'] = sourceData.contactperson;

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
    
    await SaveUserData(user, async(data, err) => {
        if (IsHasValue(data)) {            
            if(IsHasValue(data.first_name)){
                userRegistationEmailTemplate = userRegistationEmailTemplate.replace('[FIRSTNAME]', data.first_name);
            }

            if(IsHasValue(data.last_name)){
                userRegistationEmailTemplate = userRegistationEmailTemplate.replace('[LASTNAME]', data.last_name);
            }

            if(IsHasValue(data.last_name)){
                userRegistationEmailTemplate = userRegistationEmailTemplate.replace('[COMPANYURL]', config.CompanyURL);
            }

            if(IsHasValue(data.last_name)){
                userRegistationEmailTemplate = userRegistationEmailTemplate.replace('[USERNAME]', data.user_name);
            }

            if(IsHasValue(data.last_name)){
                userRegistationEmailTemplate = userRegistationEmailTemplate.replace('[PASSWORD]', data.password);
            }

            //TODO: Send Confirmation email to user.
            let mailOptions = {
                to: data.email_id,
                subject: 'New Company User Registation',
                html: userRegistationEmailTemplate
            };
            SendEmail(mailOptions, (data, err) => {
                console.log(data, err);
            });
        }
    });
}

module.exports = { CreateDynamicUser };