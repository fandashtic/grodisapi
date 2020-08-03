const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/State');
const { GetAllCountryData } = require('./../Data/Country');
const { ReturnObject, GetLookUpData } = require('./../Shared/Util');
const { IsHasValue } = require('./../Shared/Util');

let IsStateValid = async (state_id, password, callback) => {
    return await GetById(state_id, async (state) => {
        if (state.password === password) {
            return await callback({
                'data': {
                    StateName: state.stateName,
                    StateDisplayName: state.firstName + ' ' + state.lastName,
                    StateType: state.stateType,
                    CompanyId: state.companyId,
                    store_id: state.store_id,
                    StateProfileImage: state.profileImageUrl
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

let AddState = async (state, callback) => {
    return await Save(state, async (state) => {
        if (state) {
            return await callback({
                'data': state,
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

let UpdateState = async (state_id, state, callback) => {
    return await Update(state_id, state, async (state) => {
        if (state) {
            return await callback({
                'data': state,
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

let DeleteState = async (state_id, callback) => {
    return await Delete(state_id, async (state) => {
        if (state) {
            return await callback({
                'data': state,
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

let GetState = async (state_id, callback) => {
    return await GetById(state_id, async (state) => {
        if (state) {
            return await callback({
                'data': state,
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

let GetAllStates = async (filter, callback) => {
    return await GetAll(filter, async (states) => {
        if (states) {
            return await callback({
                'data': states,
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

let StateLookUp = async (state_id, callback) => {
    if (IsHasValue(state_id)) {
        return await GetById(state_id, async (state) => {
            if (IsHasValue(state)) {
                return await GetStateHierarchyData(state, callback);
            } else {
                return await callback({
                    'data': null,
                    'Status': 401
                })
            }
        });
    } else {
        return await GetStateHierarchyData(null, callback);
    }
}

const GetStateHierarchyData = async (state, callback) => {
    let active_filter = { 'status': true };
    let _lookup = {};

    if (IsHasValue(state)) {
        _lookup.country_id = state.country_id;
        _lookup.country_name = state.country_name;
        _lookup.state_id = state.state_id;
        _lookup.state_name = state.state_name;
        _lookup.company_id = state.company_id;
        _lookup.company_name = state.company_name;
        _lookup.store_id = state.store_id;
        _lookup.store_name = state.store_name;
        _lookup.profile_image_url = state.profile_image_url;
        _lookup.status = state.status;
        _lookup.latitude = state.latitude;
        _lookup.longitude = state.longitude;
    }

    GetAllCountryData(active_filter, async (countries) => {
        let _m = GetLookUpData(countries, 'country_id', 'country_name', _lookup.country_id);
        _lookup.countries = _m.list;
        _lookup.country_name = _m.label;
        return await ReturnObject(callback, null, _lookup, 'GetStateHierarchyData');
    });
}

module.exports = { IsStateValid, AddState, UpdateState, DeleteState, GetState, GetAllStates, StateLookUp };