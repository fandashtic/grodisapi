
const { AddManufacture, UpdateManufacture, DeleteManufacture, GetManufacture, GetAllManufactures, ManufactureLookUp } = require('./../../Core/ManufactureManager');

let AddManufactureAPI = async (manufacture, callback) => {
    return await AddManufacture(manufacture, callback);
};

let UpdateManufactureAPI = async (manufactureId, manufacture, callback) => {
    return await UpdateManufacture(manufactureId, manufacture, callback);
};

let DeleteManufactureAPI = async (manufactureId, callback) => {
    return await DeleteManufacture(manufactureId, callback);
};

let GetManufacturesAPI = async (filter, callback) => {
    return await GetAllManufactures(filter, callback);
};

let GetManufactureAPI = async (filter, callback) => {
    return await GetManufacture(filter, callback);
};

let ManufactureLookUpAPI = async (filter, callback) => {
    return await ManufactureLookUp(filter, callback);
};

module.exports = { AddManufactureAPI, UpdateManufactureAPI, DeleteManufactureAPI, GetManufacturesAPI, GetManufactureAPI, ManufactureLookUpAPI };