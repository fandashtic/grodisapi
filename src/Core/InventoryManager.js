const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Inventory');
const { IsHasValue, ReturnObject, GetLookUpData } = require('./../Shared/Util');

let IsInventoryValid = async (inventoryName, password, callback) => {
    return await GetById(inventoryName, async (inventory) => {
        if (inventory.password === password) {
            return await callback({
                'data': {
                    InventoryName: inventory.inventoryName,
                    InventoryDisplayName: inventory.firstName + ' ' + inventory.lastName,
                    InventoryType: inventory.inventoryType,
                    company_id: inventory.company_id,
                    store_id: inventory.store_id,
                    InventoryProfileImage: inventory.profileImageUrl
                },
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let AddInventory = async (inventory, callback) => {
    return await Save(inventory, async (inventory) => {
        if (inventory) {
            return await callback({
                'data': inventory,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let UpdateInventory = async (key, inventory, callback) => {
    return await Update(key, inventory, async (inventory) => {
        if (inventory) {
            return await callback({
                'data': inventory,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let DeleteInventory = async (key, callback) => {
    return await Delete(key, async (inventory) => {
        if (inventory) {
            return await callback({
                'data': inventory,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

let GetInventory = async (inventoryName, callback) => {
    return await GetById(inventoryName, async (inventory) => {
        if (inventory) {
            return await callback({
                'data': inventory,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
}

let GetAllInventorys = async (filter, callback) => {
    return await GetAll(filter, async (inventorys) => {
        if (inventorys) {
            return await callback({
                'data': inventorys,
                'Status': 200
            })
        } else {
            return await callback({
                'data': null,
                'Status': 401
            })
        }
    });
};

module.exports = { IsInventoryValid, AddInventory, UpdateInventory, DeleteInventory, GetInventory, GetAllInventorys };