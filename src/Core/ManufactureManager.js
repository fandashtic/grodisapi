const { GetManufactureDataById, GetAllManufactureData, SaveManufactureData, UpdateManufactureData, DeleteManufactureData} = require('./../Data/Manufacture');
const { ReturnObject, GetLookUpData, IsHasValue} = require('./../Shared/Util');

let AddManufacture = async (manufacture, callback) => {
    return await SaveManufactureData(manufacture, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let UpdateManufacture = async (manufacture_id, manufacture, callback) => {
    return await UpdateManufactureData(manufacture_id, manufacture, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let DeleteManufacture = async (manufacture_id, callback) => {
    return await DeleteManufactureData(manufacture_id, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let GetManufacture = async (manufacture_id, callback) => {
    return await GetManufactureDataById(manufacture_id, async (manufacture) => {
        if (manufacture) {
            return await callback({
                'data': manufacture,
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

let GetAllManufactures = async (filter, callback) => {
    return await GetAllManufactureData(filter, async (manufactures) => {
        if (manufactures) {
            return await callback({
                'data': manufactures,
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

let ManufactureLookUp = async (manufacture_id, callback) => {
    if (IsHasValue(manufacture_id)) {
        return await GetManufactureDataById(manufacture_id, async (manufacture) => {
            if (IsHasValue(manufacture)) {
                return await GetManufactureHierarchyData(manufacture, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetManufactureHierarchyData(null, callback);
    }
}

const GetManufactureHierarchyData = async (manufacture, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(manufacture)) {
        _lookup.manufacture_id = manufacture.manufacture_id;
        _lookup.manufacture_name = manufacture.manufacture_name;
        _lookup.company_id = manufacture.company_id;
        _lookup.company_name = manufacture.company_name;
        _lookup.store_id = manufacture.store_id;
        _lookup.store_name = manufacture.store_name;
        _lookup.description = manufacture.description;
        _lookup.profile_image_url = manufacture.profile_image_url;
        _lookup.status = manufacture.status;
    }

    GetAllManufactureData(active_filter, async (manufactures) => {
        let _m = GetLookUpData(manufactures, 'manufacture_id', 'manufacture_name', _lookup.manufacture_id);
        _lookup.manufactures = _m.list;

        return await ReturnObject(callback, null, _lookup, 'GetManufactureHierarchyData');
    });
}

module.exports = { AddManufacture, UpdateManufacture, DeleteManufacture, GetManufacture, GetAllManufactures, ManufactureLookUp };