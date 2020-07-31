const { docClient } = require('../../db');
const { GetUpdateExpressionAndAttributeValuesAndNames, ReturnObject, GetKey } = require('./Util');
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });
const db = admin.firestore();

let Get = async (tableName, keyColumn, keyValue, callback) => {
    const ref = db.collection('users').doc('aturing');
    const doc = await ref.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data());
    }
};

let All = async (tableName, filter, callback) => {
    let array = [];
    let data = GetUpdateExpressionAndAttributeValuesAndNames(filter, 0);

    var params = {
        TableName: tableName,
        FilterExpression: data.expression,
        ExpressionAttributeNames: data.names,
        ExpressionAttributeValues: data.attributeValues
    };

    docClient.scan(params, onScan);

    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            data.Items.forEach(function (itemdata) {
                array.push(itemdata);
            });

            // continue scanning if we have more items
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }

            ReturnObject(callback, err, array, 'GetAll');
        }
    }
};

let Add = async (tableName, keyColumn, tableData, callback) => {
    var params = {
        TableName: tableName,
        Item: tableData
    };

    //CreateTable(tableName, keyColumn, async () => {
    return await docClient.put(params, function (err, data) {
        ReturnObject(callback, err, data, 'Add');
    });
    //})
}

let Edit = async (tableName, keyColumn, keyValue, tableData, callback) => {
    let data = GetUpdateExpressionAndAttributeValuesAndNames(tableData, 1);

    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue),
        UpdateExpression: data.expression, // "set updated_by = :updated_by, is_deleted = :is_deleted",
        ExpressionAttributeValues: data.attributeValues,
        ReturnValues: "UPDATED_NEW"
    };

    //CreateTable(tableName, keyColumn, async () => {
    return await docClient.update(params, function (err, data) {
        ReturnObject(callback, err, data, 'Update');
    });
    //})    
}

let Remove = async (tableName, keyColumn, keyValue, callback) => {
    var params = {
        TableName: tableName,
        Key: GetKey(keyColumn, keyValue)
    };
    docClient.delete(params, function (err, data) {
        ReturnObject(callback, err, data, 'Delete');
    });
};

module.exports = { Get, All, Add, Edit, Remove };