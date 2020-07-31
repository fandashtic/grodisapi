const{ GetAllStores, AddStore, UpdateStore, DeleteStore, StoreLookUp, GetStore } = require('./../../Core/StoreManager');

let AddStoreAPI = async (store, callback) => {
    return await AddStore(store, callback);
};

let UpdateStoreAPI = async (store_id, store, callback) => {
    return await UpdateStore(store_id, store, callback);
};

let DeleteStoreAPI = async (store_id, callback) => {
    return await DeleteStore(store_id, callback);
};

let GetStoreAPI = async (store_id, callback) => {
    return await GetStore(store_id, callback);
};

let GetStoresAPI = async (filter, callback) => {
    return await GetAllStores(filter, callback);
};

let StoreLookUpAPI = async (filter, callback) => {
    return await StoreLookUp(filter, callback);
};

module.exports = { AddStoreAPI, UpdateStoreAPI, DeleteStoreAPI, GetStoresAPI, GetStoreAPI, StoreLookUpAPI };