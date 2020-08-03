const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Store');
const { GetAllAreaData } = require('./../Data/Area');
const { GetAllCityData } = require('./../Data/City');
const { GetAllStateData } = require('./../Data/State');
const { GetAllCountryData } = require('./../Data/Country');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');
const { CreateDynamicUser } = require('./../Shared/Common');
const { ApplicationType } = require('./../Shared/Constant/Enum');

let IsStoreValid = async (store_id, password, callback) => {
    return await GetById(store_id, async (store) => {
        if (store.password === password) {
            return await callback({
                'data': {
                    StoreName: store.storeName,
                    StoreDisplayName: store.firstName + ' ' + store.lastName,
                    StoreType: store.storeType,
                    CompanyId: store.companyId,
                    store_id: store.store_id,
                    StoreProfileImage: store.profileImageUrl
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

let AddStore = async (store, callback) => {
    return await Save(store, async (store) => {
        if (store) {
            await CreateDynamicUser(store, ApplicationType.Store);
            return await callback({
                'data': store,
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

let UpdateStore = async (store_id, store, callback) => {
    return await Update(store_id, store, async (store) => {
        if (store) {
            return await callback({
                'data': store,
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

let DeleteStore = async (store_id, callback) => {
    return await Delete(store_id, async (store) => {
        if (store) {
            return await callback({
                'data': store,
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

let GetStore = async (store_id, callback) => {
    return await GetById(store_id, async (store) => {
        if (store) {
            return await callback({
                'data': store,
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

let GetAllStores = async (filter, callback) => {
    return await GetAll(filter, async (stores) => {
        if (stores) {
            return await callback({
                'data': stores,
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

let StoreLookUp = async (store_id, callback) => {
    if (IsHasValue(store_id)) {
        return await GetById(store_id, async (store) => {
            if (IsHasValue(store)) {
                return await GetStoreHierarchyData(store, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetStoreHierarchyData(null, callback);
    }
}

const GetStoreHierarchyData = async (store, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(store)) {
        _lookup.store_id = store.store_id;
        _lookup.store_name = store.store_name;
        _lookup.company_id = store.company_id;
        _lookup.company_name = store.company_name;
        _lookup.country_id = store.manufacture_id;
        _lookup.country_name = store.manufacture_name;
        _lookup.state_id = store.state_id;
        _lookup.state_name = store.state_name;
        _lookup.city_id = store.city_id;
        _lookup.city_name = store.city_name;
        _lookup.area_id = store.area_id;
        _lookup.area_name = store.area_name;
        _lookup.profile_image_url = store.profile_image_url;
        _lookup.status = store.status;
        _lookup.pincode = store.pincode;
        _lookup.latitude = store.latitude;
        _lookup.longitude = store.longitude;
        _lookup.email = store.email;
        _lookup.mobilenumber = store.mobilenumber;
        _lookup.contactperson = store.contactperson;
        _lookup.tin = store.tin;
        _lookup.gst = store.gst;
        _lookup.logo = store.logo;
        _lookup.banner = store.banner;
        _lookup.business_days_hours = store.business_days_hours;
        _lookup.delivery_days_hours = store.delivery_days_hours;
    }

    GetAllCountryData(active_filter, async (countries) => {
        let _m = GetLookUpData(countries, 'country_id', 'country_name', _lookup.country_id);
        _lookup.countries = _m.list;
        _lookup.country_name = _m.label;

        await GetAllStateData(active_filter, async (brands) => {
            let _b = GetLookUpData(brands, 'state_id', 'state_name', _lookup.state_id);
            _lookup.states = _b.list;
            _lookup.state_name = _b.label;

            await GetAllCityData(active_filter, async (storeCategories) => {
                let _bc = GetLookUpData(storeCategories, 'city_id', 'city_name', _lookup.city_id);
                _lookup.cities = _bc.list;
                _lookup.city_name = _bc.label;

                await GetAllAreaData(active_filter, async (storeFamilies) => {
                    let _bf = GetLookUpData(storeFamilies, 'area_id', 'area_name', _lookup.area_id);
                    _lookup.areas = _bf.list;
                    _lookup.area_name = _bf.label;

                    return await ReturnObject(callback, null, _lookup, 'GetStoreHierarchyData');
                });
            });
        });
    });
}

module.exports = { StoreLookUp, IsStoreValid, AddStore, UpdateStore, DeleteStore, GetStore, GetAllStores };