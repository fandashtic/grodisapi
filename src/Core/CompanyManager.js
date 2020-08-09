const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Company');
const { CreateDynamicUser } = require('./../Shared/Common');
const { ApplicationType } = require('./../Shared/Constant/Enum');
const { IsHasValue, ReturnObject, GetLookUpData } = require('./../Shared/Util');

let AddCompany = async (company, callback) => {    
    // Check the company is exists by email
    return await GetbyColumn(company.email_id, 'email_id', async (result, err) => {
        if (err) {
            return await Save(company, async (_company, err) => {
                if (_company) {
                    return await CreateDynamicUser(_company, ApplicationType.Company, callback);
                } else {
                    return await callback({
                        'data': null,
                        'Status': 401
                    })
                }
            });
        }
    });
}

let UpdateCompany = async (key, company, callback) => {
    return await Update(key, company, async (company) => {
        if (company) {
            return await callback({
                'data': company,
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

let DeleteCompany = async (key, callback) => {
    return await Delete(key, async (company) => {
        if (company) {
            return await callback({
                'data': company,
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

let GetCompany = async (companyName, callback) => {
    return await GetById(companyName, async (company) => {
        if (company) {
            return await callback({
                'data': company,
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

let GetAllCompanies = async (filter, callback) => {
    return await GetAll(filter, async (companies) => {
        if (companies) {
            return await callback({
                'data': companies,
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


let CompanyLookUp = async (company_id, callback) => {
    if (IsHasValue(company_id)) {
        return await GetById(company_id, async (company) => {
            if (IsHasValue(company)) {
                return await GetCompanyHierarchyData(company, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetCompanyHierarchyData(null, callback);
    }
}

const GetCompanyHierarchyData = async (company, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(company)) {
        _lookup.company_id = company.company_id;
        _lookup.company_name = company.company_name;
        _lookup.profile_image_url = company.profile_image_url;
        _lookup.status = company.status;
    }

    GetAll(active_filter, async (companies) => {
        let _m = GetLookUpData(companies, 'company_id', 'company_name', _lookup.company_id);
        _lookup.companies = _m.list;
        return await ReturnObject(callback, null, _lookup, 'GetCompanyHierarchyData');
    });
}

module.exports = { AddCompany, UpdateCompany, DeleteCompany, GetCompany, GetAllCompanies, CompanyLookUp };