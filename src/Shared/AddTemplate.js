var nodemailer = require('nodemailer');
const { DeCode, ReturnObject, IsHasValue } = require('./../Shared/Util');
var config = require('./../../appConfig.json');
const { Add } = require('./../Shared/Reposidery');

let AddTemplate = async (template_id, template, callback) => {
    if (IsHasValue(template_id)) {
        Add('template', template_id, template, callback);
    } else {
        return await callback({
            'data': 'Invalid template',
            'Status': 401
        });
    }
};

module.exports = { AddTemplate };