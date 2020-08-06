const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/City');
const { GetAll: GetAllStateData } = require('./../Data/State');
const { GetAll: GetAllCountryData } = require('./../Data/Country');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsCityValid = async (city_id, password, callback) => {
    return await GetById(city_id, async (city) => {
        if (city.password === password) {
            return await callback({
                'data': {
                    CityName: city.cityName,
                    CityDisplayName: city.firstName + ' ' + city.lastName,
                    CityType: city.cityType,
                    CompanyId: city.companyId,
                    store_id: city.store_id,
                    CityProfileImage: city.profileImageUrl
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

let AddCity = async (city, callback) => {
    return await Save(city, async (city) => {
        if (city) {
            return await callback({
                'data': city,
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

let UpdateCity = async (city_id, city, callback) => {
    return await Update(city_id, city, async (city) => {
        if (city) {
            return await callback({
                'data': city,
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

let DeleteCity = async (city_id, callback) => {
    return await Delete(city_id, async (city) => {
        if (city) {
            return await callback({
                'data': city,
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

let GetCity = async (city_id, callback) => {
    return await GetById(city_id, async (city) => {
        if (city) {
            return await callback({
                'data': city,
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

let GetAllCities = async (filter, callback) => {
    return await GetAll(filter, async (citys) => {
        if (citys) {
            return await callback({
                'data': citys,
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

let CityLookUp = async (city_id, callback) => {
    if (IsHasValue(city_id)) {
        return await GetById(city_id, async (city) => {
            if (IsHasValue(city)) {
                return await GetCityHierarchyData(city, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetCityHierarchyData(null, callback);
    }
}

const GetCityHierarchyData = async (city, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(city)) {
        _lookup.country_id = city.country_id;
        _lookup.country_name = city.country_name;
        _lookup.state_id = city.state_id;
        _lookup.state_name = city.state_name;
        _lookup.city_id = city.city_id;
        _lookup.city_name = city.city_name;
        _lookup.company_id = city.company_id;
        _lookup.company_name = city.company_name;
        _lookup.store_id = city.store_id;
        _lookup.store_name = city.store_name;
        _lookup.profile_image_url = city.profile_image_url;
        _lookup.status = city.status;
        _lookup.latitude = city.latitude;
        _lookup.longitude = city.longitude;
    }

    GetAllCountryData(active_filter, async (countries) => {
        let _m = GetLookUpData(countries, 'country_id', 'country_name', _lookup.country_id);
        _lookup.countries = _m.list;
        _lookup.country_name = _m.label;

        await GetAllStateData(active_filter, async (brands) => {
            let _b = GetLookUpData(brands, 'state_id', 'state_name', _lookup.state_id, 'country_id');
            _lookup.states = _b.list;
            _lookup.state_name = _b.label;

            return await ReturnObject(callback, null, _lookup, 'GetCityHierarchyData');
        });
    });
}

module.exports = { IsCityValid, AddCity, UpdateCity, DeleteCity, GetCity, GetAllCities, CityLookUp };