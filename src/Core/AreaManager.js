const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Area');
const { GetAllCityData } = require('./../Data/City');
const { GetAllStateData } = require('./../Data/State');
const { GetAllCountryData } = require('./../Data/Country');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let AddArea = async (area, callback) => {
    return await Save(area, async (area) => {
        if (area) {
            return await callback({
                'data': area,
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

let UpdateArea = async (key, area, callback) => {
    return await Update(key, area, async (area) => {
        if (area) {
            return await callback({
                'data': area,
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

let DeleteArea = async (key, callback) => {
    return await Delete(key, async (area) => {
        if (area) {
            return await callback({
                'data': area,
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

let GetArea = async (areaName, callback) => {
    return await GetById(areaName, async (area) => {
        if (area) {
            return await callback({
                'data': area,
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

let GetAllAreas = async (filter, callback) => {
    return await GetAll(filter, async (areas) => {
        if (areas) {
            return await callback({
                'data': areas,
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

let AreaLookUp = async (area_id, callback) => {
    if (IsHasValue(area_id)) {
        return await GetById(area_id, async (area) => {
            if (IsHasValue(area)) {
                return await GetAreaHierarchyData(area, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetAreaHierarchyData(null, callback);
    }
}

const GetAreaHierarchyData = async (area, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(area)) {
        _lookup.area_id = area.area_id;
        _lookup.area_name = area.area_name;
        _lookup.area_type = area.area_type;
        _lookup.country_id = area.country_id;
        _lookup.country_name = area.country_name;
        _lookup.state_id = area.state_id;
        _lookup.state_name = area.state_name;
        _lookup.city_id = area.city_id;
        _lookup.city_name = area.city_name;
        _lookup.company_id = area.company_id;
        _lookup.company_name = area.company_name;
        _lookup.store_id = area.store_id;
        _lookup.store_name = area.store_name;
        _lookup.profile_image_url = area.profile_image_url;
        _lookup.status = area.status;
        _lookup.pincode = area.pincode;
        _lookup.latitude = area.latitude;
        _lookup.longitude = area.longitude;
    }

    GetAllCountryData(active_filter, async (countries) => {
        let _m = GetLookUpData(countries, 'country_id', 'country_name', _lookup.country_id);
        _lookup.countries = _m.list;
        _lookup.country_name = _m.label;

        await GetAllStateData(active_filter, async (brands) => {
            let _b = GetLookUpData(brands, 'state_id', 'state_name', _lookup.state_id, 'country_id');
            _lookup.states = _b.list;
            _lookup.state_name = _b.label;

            await GetAllCityData(active_filter, async (storeCategories) => {
                let _bc = GetLookUpData(storeCategories, 'city_id', 'city_name', _lookup.city_id, 'state_id');
                _lookup.cities = _bc.list;
                _lookup.city_name = _bc.label;

                return await ReturnObject(callback, null, _lookup, 'GetAreaHierarchyData');
            });
        });
    });
}

module.exports = { AddArea, UpdateArea, DeleteArea, GetArea, GetAllAreas, AreaLookUp };