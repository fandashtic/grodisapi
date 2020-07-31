const {Get, All, Add, Edit, Remove } = require('./../Shared/Reposidery');
const {AddDetaultValues, UpdateDetaultValues } = require('./../Shared/Util');
const {PreFix } = require('./../Shared/Constant/Enum');

const _tableName = 'brands';
const _primaryKey = 'brand_id';

//#region 

let GetBrandDataById = async (key, callback) => {
    return await Get(_tableName, _primaryKey, key, callback);
};

let GetAllBrandDatas = async (filter, callback) => {
    return await All(_tableName, filter, callback);
};

let SaveBrandData = async (brand, callback) => {
    brand = AddDetaultValues(brand, 'brand_id', PreFix.Brand, brand.created_by);
    return await Add(_tableName, brand['brand_id'], brand, callback);
}

let UpdateBrandData = async (key, brand, callback) => {
    brand = UpdateDetaultValues(brand, brand.modified_by);
    return await Edit(_tableName,  key, brand, callback);
}

let DeleteBrandData = async (key, callback) => {
    return await Remove(_tableName, _primaryKey, key, callback);
};


module.exports = { GetBrandDataById, GetAllBrandDatas, SaveBrandData, UpdateBrandData, DeleteBrandData };

//#endregion