const db = require('./../../db');
const { ReturnObject, IsHasValue } = require('./Util');

let Get = async (tableName, key, callback) => {
    const ref = db.collection(tableName).doc(key);
    const doc = await ref.get();
    ReturnObject(callback, null, doc.data(), 'Get');
};

let GetbySingleFilter = async (tableName, columnName, value, callback) => {
    let array = [];
    const ref = db.collection(tableName);
    const snapshot = await ref.where(columnName, '==', value).get();
    if (snapshot.empty) {
        ReturnObject(callback, null, null, 'GetbySingleFilter');
    }

    snapshot.forEach(doc => {
        array.push(doc.data());
    });

    if (IsHasValue(array) && array.length > 0 && IsHasValue(array[0])) {
        ReturnObject(callback, null, array[0], 'GetbySingleFilter');
    }
};


let All = async (tableName, filter, callback) => {
    let ref = db.collection(tableName);
    let array = [];

    Object.keys(filter).map(function (k) {
        ref = ref.where(k, '==', filter[k]);
    });

    const snapshot = await ref.get();
    snapshot.forEach(doc => {
        array.push(doc.data());
    });
    ReturnObject(callback, null, array, 'GetAll');
};

let Add = async (tableName, key, tableData, callback) => {
    const ref = db.collection(tableName);
    await ref.doc(key).set(tableData).then(function () {
        ReturnObject(callback, null, tableData, 'Add');
    });
}

let Edit = async (tableName, key, tableData, callback) => {
    const ref = db.collection(tableName).doc(key);
    await UpdateObject(ref, tableData, (data, err) => {
        //console.log(data, err);
    });
    ReturnObject(callback, null, tableData, 'Edit');
}

let FullUpdate = async (tableName, key, tableData, callback) => {
    const ref = db.collection(tableName);
    await ref.doc(key).set(tableData);
    ReturnObject(callback, null, tableData, 'Edit');
}

let Remove = async (tableName, key, callback) => {
    const ref = db.collection(tableName).doc(key);
    SetValue(ref, { 'status': false }, callback, 'Remove');
};

let HardDelete = async (tableName, key, callback) => {
    const res = await db.collection(tableName).doc(key).delete();
    ReturnObject(callback, null, tableData, 'HardDelete');
};

let SetValue = async (doc, parameter, callback, methodName) => {
    const res = await doc.update(parameter);
    ReturnObject(callback, null, res, methodName);
};

let UpdateObject = async(ref, tableData, callback) =>
{
    return Object.keys(tableData).map(function (k) {
        let obj ={};
        obj[k] = tableData[k];        
        return SetValue(ref, obj, callback, 'UpdateObject');
    });
};

module.exports = { Get, GetbySingleFilter, All, Add, Edit, FullUpdate, Remove, HardDelete };