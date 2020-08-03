const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Brand');
const { GetAll: GetAllManufactureData } = require('./../Data/Manufacture');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsBrandValid = async (brand_id, password, callback) => {
    return await GetById(brand_id, async (brand) => {
        if (brand.password === password) {
            return await callback({
                'data': {
                    BrandName: brand.brandName,
                    BrandDisplayName: brand.firstName + ' ' + brand.lastName,
                    BrandType: brand.brandType,
                    CompanyId: brand.companyId,
                    store_id: brand.store_id,
                    BrandProfileImage: brand.profileImageUrl
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

let AddBrand = async (brand, callback) => {
    return await Save(brand, async (brand) => {
        if (brand) {
            return await callback({
                'data': brand,
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

let UpdateBrand = async (brand_id, brand, callback) => {
    return await Update(brand_id, brand, async (brand) => {
        if (brand) {
            return await callback({
                'data': brand,
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

let DeleteBrand = async (brand_id, callback) => {
    return await DeleteBrandData(brand_id, async (brand) => {
        if (brand) {
            return await callback({
                'data': brand,
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

let GetBrand = async (brand_id, callback) => {
    return await GetById(brand_id, async (brand) => {
        if (brand) {
            return await callback({
                'data': brand,
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

let GetAllBrands = async (filter, callback) => {
    return await GetAll(filter, async (brands) => {
        if (brands) {
            return await callback({
                'data': brands,
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

let BrandLookUp = async (brand_id, callback) => {
    if (IsHasValue(brand_id)) {
        return await GetById(brand_id, async (brand) => {
            if (IsHasValue(brand)) {
                return await GetBrandHierarchyData(brand, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetBrandHierarchyData(null, callback);
    }
}

const GetBrandHierarchyData = async (brand, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(brand)) {
        _lookup.manufacture_id = brand.manufacture_id;
        _lookup.brand_id = brand.brand_id;
        _lookup.brand_name = brand.brand_name;
        _lookup.company_id = brand.company_id;
        _lookup.company_name = brand.company_name;
        _lookup.store_id = brand.store_id;
        _lookup.store_name = brand.store_name;
        _lookup.description = brand.description;
        _lookup.profile_image_url = brand.profile_image_url;
        _lookup.status = brand.status;
    }

    GetAllManufactureData(active_filter, async (manufactures) => {
        let _m = GetLookUpData(manufactures, 'manufacture_id', 'manufacture_name', _lookup.manufacture_id);
        _lookup.manufactures = _m.list;
        _lookup.manufacture_name = _m.label;

        return await ReturnObject(callback, null, _lookup, 'GetBrandHierarchyData');
    });
}

module.exports = { IsBrandValid, AddBrand, UpdateBrand, DeleteBrand, GetBrand, GetAllBrands, BrandLookUp };