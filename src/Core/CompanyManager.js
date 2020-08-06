const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Company');
const { CreateDynamicUser } = require('./../Shared/Common');
const { ApplicationType } = require('./../Shared/Constant/Enum');

let AddCompany = async (company, callback) => {    
    // Check the company is exists by email
    return await GetbyColumn(company.email_id, 'email_id', async (result, err) => {
        if (err) {
            return await Save(company, async (_company, err) => {
                if (_company) {
                    await CreateDynamicUser(_company, ApplicationType.Company);
                    return await callback({
                        'data': _company,
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

module.exports = { AddCompany, UpdateCompany, DeleteCompany, GetCompany, GetAllCompanies };