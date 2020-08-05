const {Get, GetbySingleFilter, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'companies';
const _primaryKey = 'company_id';

//#region

let GetbyColumn = async (value, columnName, callback) => {
    return await GetbySingleFilter(_tableName, columnName, value, callback);
};

let GetById = async (key, callback) => {
    return await Get(_tableName, key, callback);
};

let GetAll = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let Save = async (company, callback) => {
    company = AddDetaultValues(company, 'company_id', PreFix.Company, company.created_by);
    return await Add(_tableName, company['company_id'], company, callback);
}

let Update = async (key, company, callback) => {
    company = UpdateDetaultValues(company, company.modified_by);
    return await Edit(_tableName,  key, company, callback);
}

let Delete = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};

module.exports = { GetbyColumn, GetById, GetAll, Save, Update, Delete };

//#endregion