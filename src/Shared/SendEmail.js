var nodemailer = require('nodemailer');
const { DeCode } = require('./../Shared/Util');
var config = require('./../../appConfig.json');

let SendEmail = async (mailOptions, callback) => {

    mailOptions['from'] = DeCode(config.mailconfig.user);

    var transporter = nodemailer.createTransport({
        service: config.mailconfig.service,
        auth: {
            user: DeCode(config.mailconfig.user),
            pass: DeCode(config.mailconfig.pass)
        }
    });

    transporter.sendMail(mailOptions, function (err, data) {
        if (data) {
            callback.send(data);
        } else {
            callback.send(err);
        }
    });
};

module.exports = { SendEmail };