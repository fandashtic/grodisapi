const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Company');
const { CreateDynamicUser } = require('./../Shared/Common');
const { ApplicationType } = require('./../Shared/Constant/Enum');

let IsCompanyValid = async (email_id) => {
    return await GetbyColumn(email_id, 'email_id', async (company) => {
        if (company) {
            return false;
        } else {
            return true;
        }
    });
};

let AddCompany = async (company, callback) => {

    // Check the company is exists by email
    if (!IsCompanyValid(company.email_id)) {
        return await Save(company, async (company) => {
            if (company) {
                await CreateDynamicUser(company, ApplicationType.Company);
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
    } else {
        return await callback({
            'data': 'Company exists with emailid: ' + company.email_id,
            'Status': 401
        })
    }
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

module.exports = { IsCompanyValid, AddCompany, UpdateCompany, DeleteCompany, GetCompany, GetAllCompanies };