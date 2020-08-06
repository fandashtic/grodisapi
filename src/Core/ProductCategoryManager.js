const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/ProductCategory');
const { GetAll: GetAllManufactureData } = require('./../Data/Manufacture');
const { GetAll: GetAllBrandDatas } = require('./../Data/Brand');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsProductCategoryValid = async (product_category_id, password, callback) => {
    return await GetById(product_category_id, async (product_category) => {
        if (product_category.password === password) {
            return await callback({
                'data': {
                    ProductCategoryName: product_category.product_category_name,
                    ProductCategoryDisplayName: product_category.firstName + ' ' + product_category.lastName,
                    ProductCategoryType: product_category.product_categoryType,
                    CompanyId: product_category.companyId,
                    store_id: product_category.store_id,
                    ProductCategoryProfileImage: product_category.profileImageUrl
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

let AddProductCategory = async (product_category, callback) => {
    return await Save(product_category, async (product_category) => {
        if (product_category) {
            return await callback({
                'data': product_category,
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

let UpdateProductCategory = async (product_category_id, product_category, callback) => {
    return await Update(product_category_id, product_category, async (product_category) => {
        if (product_category) {
            return await callback({
                'data': product_category,
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

let DeleteProductCategory = async (product_category_id, callback) => {
    return await Delete(product_category_id, async (product_category) => {
        if (product_category) {
            return await callback({
                'data': product_category,
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

let GetProductCategory = async (product_category_name, callback) => {
    return await GetById(product_category_name, async (product_category) => {
        if (product_category) {
            return await callback({
                'data': product_category,
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

let GetAllProductCategories = async (filter, callback) => {
    return await GetAll(filter, async (product_categorys) => {
        if (product_categorys) {
            return await callback({
                'data': product_categorys,
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

let ProductCategoryLookUp = async (product_category_id, callback) => {
    if (IsHasValue(product_category_id)) {
        return await GetById(product_category_id, async (product_category) => {
            if (IsHasValue(product_category)) {
                return await GetProductCategoryHierarchyData(product_category, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetProductCategoryHierarchyData(null, callback);
    }
}

const GetProductCategoryHierarchyData = async (product_category, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(product_category)) {
        _lookup.manufacture_id = product_category.manufacture_id;
        _lookup.brand_id = product_category.brand_id;
        _lookup.product_category_id = product_category.product_category_id;
        _lookup.product_category_name = product_category.product_category_name;
        _lookup.company_id = product_category.company_id;
        _lookup.company_name = product_category.company_name;
        _lookup.store_id = product_category.store_id;
        _lookup.store_name = product_category.store_name;
        _lookup.description = product_category.description;
        _lookup.profile_image_url = product_category.profile_image_url;
        _lookup.status = product_category.status;
    }

    GetAllManufactureData(active_filter, async (manufactures) => {
        let _m = GetLookUpData(manufactures, 'manufacture_id', 'manufacture_name', _lookup.manufacture_id);
        _lookup.manufactures = _m.list;
        _lookup.manufacture_name = _m.label;

        await GetAllBrandDatas(active_filter, async (brands) => {
            let _b = GetLookUpData(brands, 'brand_id', 'brand_name', _lookup.brand_id, 'manufacture_id');
            _lookup.brands = _b.list;
            _lookup.brand_name = _b.label;
            return await ReturnObject(callback, null, _lookup, 'GetProductCategoryHierarchyData');
        });
    });
}

module.exports = { ProductCategoryLookUp, IsProductCategoryValid, AddProductCategory, UpdateProductCategory, DeleteProductCategory, GetProductCategory, GetAllProductCategories };