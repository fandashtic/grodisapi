const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Country');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsCountryValid = async (country_id, password, callback) => {
    return await GetById(country_id, async (country) => {
        if (country.password === password) {
            return await callback({
                'data': {
                    CountryName: country.country_id,
                    CountryDisplayName: country.firstName + ' ' + country.lastName,
                    CountryType: country.countryType,
                    CompanyId: country.companyId,
                    store_id: country.store_id,
                    CountryProfileImage: country.profileImageUrl
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

let AddCountry = async (country, callback) => {
    return await Save(country, async (country) => {
        if (country) {
            return await callback({
                'data': country,
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

let UpdateCountry = async (country_id, country, callback) => {
    return await Update(country_id, country, async (country) => {
        if (country) {
            return await callback({
                'data': country,
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

let DeleteCountry = async (country_id, callback) => {
    return await Delete(country_id, async (country) => {
        if (country) {
            return await callback({
                'data': country,
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

let GetCountry = async (country_id, callback) => {
    return await GetById(country_id, async (country) => {
        if (country) {
            return await callback({
                'data': country,
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

let GetAllCountries = async (filter, callback) => {
    return await GetAll(filter, async (countries) => {
        if (countries) {
            return await callback({
                'data': countries,
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


let CountryLookUp = async (country_id, callback) => {
    if (IsHasValue(country_id)) {
        return await GetById(country_id, async (country) => {
            if (IsHasValue(country)) {
                return await GetCountryHierarchyData(country, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetCountryHierarchyData(null, callback);
    }
}

const GetCountryHierarchyData = async (country, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(country)) {
        _lookup.country_id = country.country_id;
        _lookup.country_name = country.country_name;
        _lookup.company_id = country.company_id;
        _lookup.company_name = country.company_name;
        _lookup.store_id = country.store_id;
        _lookup.store_name = country.store_name;
        _lookup.profile_image_url = country.profile_image_url;
        _lookup.status = country.status;
        _lookup.latitude = country.latitude;
        _lookup.longitude = country.longitude;
    }

    GetAll(active_filter, async (countries) => {
        let _m = GetLookUpData(countries, 'country_id', 'country_name', _lookup.country_id);
        _lookup.countries = _m.list;
        return await ReturnObject(callback, null, _lookup, 'GetCountryHierarchyData');
    });
}

module.exports = { IsCountryValid, AddCountry, UpdateCountry, DeleteCountry, GetCountry, GetAllCountries, CountryLookUp };