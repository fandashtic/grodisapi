const{ AddCompany, UpdateCompany, DeleteCompany, GetCompany, GetAllCompanies, CompanyLookUp } = require('./../../Core/CompanyManager');

let AddCompanyAPI = async (company, callback) => {
    return await AddCompany(company, callback);
};

let UpdateCompanyAPI = async (company_id, company, callback) => {
    return await UpdateCompany(company_id, company, callback);
};

let DeleteCompanyAPI = async (company_id, callback) => {
    return await DeleteCompany(company_id, callback);
};

let GetCompanyAPI = async (company_id, callback) => {
    return await GetCompany(company_id, callback);
};

let GetCompaniesAPI = async (filter, callback) => {
    return await GetAllCompanies(filter, callback);
};

let CompanyLookUpAPI = async (filter, callback) => {
    return await CompanyLookUp(filter, callback);
};

module.exports = { AddCompanyAPI, UpdateCompanyAPI, DeleteCompanyAPI, GetCompanyAPI, GetCompaniesAPI, CompanyLookUpAPI };