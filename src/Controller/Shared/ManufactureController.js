
const { AddManufacture, UpdateManufacture, DeleteManufacture, GetManufacture, GetAllManufactures, ManufactureLookUp } = require('./../../Core/ManufactureManager');

let AddManufactureAPI = async (manufacture, callback) => {
    return await AddManufacture(manufacture, callback);
};

let UpdateManufactureAPI = async (manufacture_id, manufacture, callback) => {
    return await UpdateManufacture(manufacture_id, manufacture, callback);
};

let DeleteManufactureAPI = async (manufacture_id, callback) => {
    return await DeleteManufacture(manufacture_id, callback);
};

let GetManufacturesAPI = async (filter, callback) => {
    return await GetAllManufactures(filter, callback);
};

let GetManufactureAPI = async (manufacture_id, callback) => {
    return await GetManufacture(manufacture_id, callback);
};

let ManufactureLookUpAPI = async (manufacture_id, callback) => {
    return await ManufactureLookUp(manufacture_id, callback);
};

module.exports = { AddManufactureAPI, UpdateManufactureAPI, DeleteManufactureAPI, GetManufacturesAPI, GetManufactureAPI, ManufactureLookUpAPI };