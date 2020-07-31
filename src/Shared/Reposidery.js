const db = require('./../../db');
const { GetUpdateExpressionAndAttributeValuesAndNames, ReturnObject, GetKey } = require('./Util');

let Get = async (tableName, key, callback) => {
    const ref = db.collection(tableName).doc(key);
    const doc = await  ref.get();
    ReturnObject(callback, null, doc.data(), 'Get');
};


let All = async (tableName, filter, callback) => {
    debugger;  
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
    ReturnObject(callback, null, 'Ok', 'Add');
}

let Edit = async (tableName, key, tableData, callback) => {
    const ref = db.collection(tableName);
    await ref.doc(key).set(tableData); 
    ReturnObject(callback, null, 'Ok', 'Edit');
}

let Remove = async (tableName, key, callback) => {
    const res = await db.collection(tableName).doc(key).delete();
    ReturnObject(callback, null, res, 'Remove');
};

module.exports = { Get, All, Add, Edit, Remove };