const db = require('./../../db');
const { ReturnObject, IsHasValue } = require('./Util');

let Get = async (tableName, key, callback) => {
    const ref = db.collection(tableName).doc(key);
    const doc = await  ref.get();
    ReturnObject(callback, null, doc.data(), 'Get');
};

let GetbySingleFilter = async (tableName, columnName, value, callback) => {
    let array = [];
    const ref = db.collection(tableName);
    const snapshot = await ref.where(columnName, '==', value).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }

    snapshot.forEach(doc => {
        array.push(doc.data());
    });

    if(IsHasValue(array) && array.length > 0 && IsHasValue(array[0])){
        ReturnObject(callback, null, array[0], 'GetbySingleFilter');
    }
};


let All = async (tableName, filter, callback) => {
    const ref = db.collection(tableName);
    let array = [];
    const snapshot = await ref.get();
    snapshot.forEach(doc => {
        array.push( doc.data());       
        //console.log(doc.id, '=>', doc.data());
    });
    ReturnObject(callback, null, array, 'GetAll');
};

let Add = async (tableName, key, tableData, callback) => {
    const ref = db.collection(tableName);
    await ref.doc(key).set(tableData);
    ReturnObject(callback, null, tableData, 'Add');
}

let Edit = async (tableName, key, tableData, callback) => {
    const ref = db.collection(tableName);
    await ref.doc(key).set(tableData); 
    ReturnObject(callback, null, tableData, 'Edit');
}

let Remove = async (tableName, key, callback) => {
    const res = await db.collection(tableName).doc(key).delete();
    ReturnObject(callback, null, res, 'Remove');
};

module.exports = { Get, GetbySingleFilter, All, Add, Edit, Remove };