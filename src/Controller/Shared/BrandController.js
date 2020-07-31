
const{ GetAllBrands, GetBrand, AddBrand, UpdateBrand, DeleteBrand, BrandLookUp } = require('./../../Core/BrandManager');

let AddBrandAPI = async (brand, callback) => {
    return await AddBrand(brand, callback);
};

let UpdateBrandAPI = async (brand_id, brand, callback) => {
    return await UpdateBrand(brand_id, brand, callback);
};

let DeleteBrandAPI = async (brand_id, callback) => {
    return await DeleteBrand(brand_id, callback);
};

let GetBrandAPI = async (brand_id, callback) => {
    return await GetBrand(brand_id, callback);
};

let GetBrandsAPI = async (filter, callback) => {
    return await GetAllBrands(filter, callback);
};

let BrandLookUpAPI = async (brand_id, callback) => {
    return await BrandLookUp(brand_id, callback);
};

module.exports = { AddBrandAPI, UpdateBrandAPI, DeleteBrandAPI, GetBrandsAPI, BrandLookUpAPI, GetBrandAPI };