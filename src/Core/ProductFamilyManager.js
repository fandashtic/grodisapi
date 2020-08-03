const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/ProductFamily');
const { GetAll: GetAllManufactureData } = require('./../Data/Manufacture');
const { GetAll: GetAllBrandDatas } = require('./../Data/Brand');
const { GetAll: GetAllProductCategoriesData } = require('./../Data/ProductCategory');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsProductFamilyValid = async (product_family_id, password, callback) => {
    return await GetById(product_family_id, async (product_family) => {
        if (product_family.password === password) {
            return await callback({
                'data': {
                    product_family_name: product_family.product_family_name,
                    product_familyDisplayName: product_family.firstName + ' ' + product_family.lastName,
                    product_familyType: product_family.product_familyType,
                    CompanyId: product_family.companyId,
                    store_id: product_family.store_id,
                    product_familyProfileImage: product_family.profileImageUrl
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

let AddProductFamily = async (product_family, callback) => {
    return await Save(product_family, async (product_family) => {
        if (product_family) {
            return await callback({
                'data': product_family,
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

let UpdateProductFamily = async (product_family_id, product_family, callback) => {
    return await Update(product_family_id, product_family, async (product_family) => {
        if (product_family) {
            return await callback({
                'data': product_family,
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

let DeleteProductFamily = async (product_family_id, callback) => {
    return await Delete(product_family_id, async (product_family) => {
        if (product_family) {
            return await callback({
                'data': product_family,
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

let GetProductFamily = async (product_family_name, callback) => {
    return await GetById(product_family_name, async (product_family) => {
        if (product_family) {
            return await callback({
                'data': product_family,
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

let GetAllProductFamilies = async (filter, callback) => {
    return await GetAll(filter, async (product_familys) => {
        if (product_familys) {
            return await callback({
                'data': product_familys,
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

let ProductFamilyLookUp = async (product_family_id, callback) => {
    if (IsHasValue(product_family_id)) {
        return await GetById(product_family_id, async (product_family) => {
            if (IsHasValue(product_family)) {
                return await GetProductFamilyHierarchyData(product_family, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetProductFamilyHierarchyData(null, callback);
    }
}

const GetProductFamilyHierarchyData = async (product_family, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(product_family)) {
        _lookup.manufacture_id = product_family.manufacture_id;
        _lookup.brand_id = product_family.brand_id;
        _lookup.product_category_id = product_family.product_category_id;
        _lookup.product_family_id = product_family.product_family_id;
        _lookup.product_family_name = product_family.product_family_name;
        _lookup.company_id = product_family.company_id;
        _lookup.company_name = product_family.company_name;
        _lookup.store_id = product_family.store_id;
        _lookup.store_name = product_family.store_name;
        _lookup.description = product_family.description;
        _lookup.profile_image_url = product_family.profile_image_url;
        _lookup.status = product_family.status;
    }

    GetAllManufactureData(active_filter, async (manufactures) => {
        let _m = GetLookUpData(manufactures, 'manufacture_id', 'manufacture_name', _lookup.manufacture_id);
        _lookup.manufactures = _m.list;
        _lookup.manufacture_name = _m.label;

        await GetAllBrandDatas(active_filter, async (brands) => {
            let _b = GetLookUpData(brands, 'brand_id', 'brand_name', _lookup.brand_id);
            _lookup.brands = _b.list;
            _lookup.brand_name = _b.label;

            await GetAllProductCategoriesData(active_filter, async (productCategories) => {
                let _bc = GetLookUpData(productCategories, 'product_category_id', 'product_category_name', _lookup.product_category_id);
                _lookup.productCategories = _bc.list;
                _lookup.product_category_name = _bc.label;

                return await ReturnObject(callback, null, _lookup, 'GetProductHierarchyData');
            });
        });
    });
}

module.exports = { ProductFamilyLookUp, IsProductFamilyValid, AddProductFamily, UpdateProductFamily, DeleteProductFamily, GetProductFamily, GetAllProductFamilies };