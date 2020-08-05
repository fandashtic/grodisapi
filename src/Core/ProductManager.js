const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Product');
const { GetAll: GetAllManufactureData  } = require('./../Data/Manufacture');
const { GetAll: GetAllBrandDatas } = require('./../Data/Brand');
const { GetAll: GetAllProductCategoriesData } = require('./../Data/ProductCategory');
const { GetAll: GetAllProductFamiliesData } = require('./../Data/ProductFamily');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsProductValid = async (product_id, password, callback) => {
    return await GetById(product_id, async (product) => {
        if (product.password === password) {
            return await callback({
                'data': {
                    ProductName: product.productName,
                    ProductDisplayName: product.firstName + ' ' + product.lastName,
                    ProductType: product.productType,
                    CompanyId: product.companyId,
                    store_id: product.store_id,
                    ProductProfileImage: product.profileImageUrl
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

let ProductLookUp = async (product_id, callback) => {
    if (IsHasValue(product_id)) {
        return await GetById(product_id, async (product) => {
            if (IsHasValue(product)) {
                return await GetProductHierarchyData(product, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetProductHierarchyData(null, callback);
    }
}

let SaveProduct = async (product, callback) => {
    return await Save(product, async (product) => {
        if (product) {
            return await callback({
                'data': product,
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

let UpdateProduct = async (product_id, product, callback) => {
    return await Update(product_id, product, async (product) => {
        if (product) {
            return await callback({
                'data': product,
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

let DeleteProduct = async (product_id, callback) => {
    return await Delete(product_id, async (product) => {
        if (product) {
            return await callback({
                'data': product,
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

let GetProduct = async (product_id, callback) => {
    return await GetById(product_id, async (product) => {
        if (product) {
            return await callback({
                'data': product,
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

let GetAllProducts = async (filter, callback) => {
    return await GetAll(filter, async (products) => {
        if (products) {
            return await callback({
                'data': products,
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

const GetProductHierarchyData = async (product, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(product)) {
        _lookup.product_id = product.product_id;
        _lookup.product_name = product.product_name;
        _lookup.manufacture_id = product.manufacture_id;
        _lookup.brand_id = product.brand_id;
        _lookup.product_category_id = product.product_category_id;
        _lookup.product_family_id = product.product_family_id;
        _lookup.company_id = product.company_id;
        _lookup.company_name = product.company_name;
        _lookup.store_id = product.store_id;
        _lookup.store_name = product.store_name;
        _lookup.description = product.description;
        _lookup.profile_image_url = product.profile_image_url;
        _lookup.status = product.status;
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

                await GetAllProductFamiliesData(active_filter, async (productFamilies) => {
                    let _bf = GetLookUpData(productFamilies, 'product_family_id', 'product_family_name', _lookup.product_family_id);
                    _lookup.product_families = _bf.list;
                    _lookup.product_family_name = _bf.label;

                    return await ReturnObject(callback, null, _lookup, 'GetProductHierarchyData');
                });
            });
        });
    });
}

module.exports = { IsProductValid, SaveProduct, UpdateProduct, DeleteProduct, GetProduct, GetAllProducts, ProductLookUp };