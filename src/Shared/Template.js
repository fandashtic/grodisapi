var nodemailer = require('nodemailer');
const { DeCode, ReturnObject, IsHasValue } = require('./Util');
var config = require('../../appConfig.json');
const { Add, Get } = require('./Reposidery');

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

let GetTemplate = async (template_id, callback) => {
    if (IsHasValue(template_id)) {
        Get('template', template_id, callback);
    } else {
        return await callback({
            'data': 'Invalid template',
            'Status': 401
        });
    }
};


module.exports = { AddTemplate, GetTemplate };