'use strict';

var fs = require('fs');
var path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const Base64 = require('js-base64');
const bodyParser = require('body-parser');

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};

exports.sendemail = function(event, context, callback) {
    //console.log(req.body.mailDetails);

  let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'info.fandashtic@gmail.com',
        pass: DeCode('JSVmJUgqdDJQVzZS')
    }
  });

  let mailDetails = //req.body.mailDetails;
  {
      from: 'info.fandashtic@gmail.com',
      to: 'info.fandashtic@gmail.com',
      subject: 'Demo mail',
      text: 'Testing mail for Fandashtic'
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
  });

  var result = {
    statusCode: 200,
    body: 'Email send Successfully!',
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};

var EnCode = (data) => {
  return Base64.encode(data);
}

var DeCode = (data) => {
  return Base64.decode(data);
}