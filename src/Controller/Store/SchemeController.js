
const{ GetScheme, GetAllSchemes, AddScheme, UpdateScheme, DeleteScheme } = require('./../../Core/SchemeManager');

let AddSchemeAPI = async (scheme, callback) => {
    return await AddScheme(scheme, callback);
};

let UpdateSchemeAPI = async (scheme_id, scheme, callback) => {
    return await UpdateScheme(scheme_id, scheme, callback);
};

let DeleteSchemeAPI = async (scheme_id, callback) => {
    return await DeleteScheme(scheme_id, callback);
};

let GetSchemeAPI = async (scheme_id, callback) => {
    return await GetScheme(scheme_id, callback);
};

let GetSchemesAPI = async (scheme_id, callback) => {
    return await GetAllSchemes(scheme_id, callback);
};

module.exports = { AddSchemeAPI, UpdateSchemeAPI, DeleteSchemeAPI, GetSchemeAPI, GetSchemesAPI };