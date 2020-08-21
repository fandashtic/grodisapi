const { uploadFile, deleteFile } = require('react-s3');
const { IsHasValue, DeCode} = require('./Shared/Util');
var config = require('appConfig.json');

const s3_config = {
    bucketName: config.s3.bucketName,
    dirName: config.s3.dirName,
    region: config.s3.region,
    accessKeyId: DeCode(config.db.key),
    secretAccessKey: DeCode(config.db.secretkey),
};

let UploadFile = async (file, folder, callback) => {
    let dirName = config.s3.dirName + '/' + folder;
    s3_config["dirName"] = dirName;
    uploadFile(file, s3_config)
        .then(async (data) => {
            if (IsHasValue(data)) {
                return await callback({
                    'data': data,
                    'Status': 200
                });
            }
            else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        })

        .catch(async (err) => {
            console.error(err);
            return await callback({
                'data': null,
                'Status': 401
            })
        })
};

let DeleteFile = async (file_name, folder, callback) => {
    let dirName = config.s3.dirName + '/' + folder;
    s3_config["dirName"] = dirName;
    deleteFile(file_name, s3_config)
        .then(async (data) => {
            if (IsHasValue(data)) {
                //console.log(data)
                return await callback({
                    'data': data,
                    'Status': 200
                });
            }
            else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        })

        .catch(async (err) => {
            console.error(err);
            return await callback({
                'data': null,
                'Status': 401
            })
        })
};

module.exports = { UploadFile, DeleteFile };