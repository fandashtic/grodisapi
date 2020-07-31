
const{ GetInventory, GetAllInventorys, AddInventory, UpdateInventory, DeleteInventory } = require('./../../Core/InventoryManager');

let AddInventoryAPI = async (inventory, callback) => {
    return await AddInventory(inventory, callback);
};

let UpdateInventoryAPI = async (inventory_id, inventory, callback) => {
    return await UpdateInventory(inventory_id, inventory, callback);
};

let DeleteInventoryAPI = async (inventory_id, callback) => {
    return await DeleteInventory(inventory_id, callback);
};


let GetInventoryAPI = async (inventory_id, callback) => {
    return await GetInventory(inventory_id, callback);
};

let GetInventorysAPI = async (filter, callback) => {
    return await GetAllInventorys(filter, callback);
};

module.exports = { AddInventoryAPI, UpdateInventoryAPI, DeleteInventoryAPI, GetInventoryAPI, GetInventorysAPI };