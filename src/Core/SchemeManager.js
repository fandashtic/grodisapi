const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Scheme');
const { IsHasValue, ReturnObject, GetLookUpData } = require('./../Shared/Util');

let IsSchemeValid = async (schemeName, password, callback) => {
    return await GetById(schemeName, async (scheme) => {
        if (scheme.password === password) {
            return await callback({
                'data': {
                    SchemeName: scheme.schemeName,
                    SchemeDisplayName: scheme.firstName + ' ' + scheme.lastName,
                    SchemeType: scheme.schemeType,
                    company_id: scheme.company_id,
                    store_id: scheme.store_id,
                    SchemeProfileImage: scheme.profileImageUrl
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

let AddScheme = async (scheme, callback) => {
    return await Save(scheme, async (scheme) => {
        if (scheme) {
            return await callback({
                'data': scheme,
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

let UpdateScheme = async (key, scheme, callback) => {
    return await Update(key, scheme, async (scheme) => {
        if (scheme) {
            return await callback({
                'data': scheme,
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

let DeleteScheme = async (key, callback) => {
    return await Delete(key, async (scheme) => {
        if (scheme) {
            return await callback({
                'data': scheme,
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

let GetScheme = async (schemeName, callback) => {
    return await GetById(schemeName, async (scheme) => {
        if (scheme) {
            return await callback({
                'data': scheme,
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

let GetAllSchemes = async (filter, callback) => {
    return await GetAll(filter, async (schemes) => {
        if (schemes) {
            return await callback({
                'data': schemes,
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

module.exports = { IsSchemeValid, AddScheme, UpdateScheme, DeleteScheme, GetScheme, GetAllSchemes };