
const{ 
   // IsCountryValid, 
    AddCountry, UpdateCountry, DeleteCountry, GetCountry, GetAllCountries, CountryLookUp } = require('./../../Core/CountryManager');

let AddCountryAPI = async (country, callback) => {
    return await AddCountry(country, callback);
};

let UpdateCountryAPI = async (country_id, country, callback) => {
    return await UpdateCountry(country_id, country, callback);
};

let DeleteCountryAPI = async (country_id, callback) => {
    return await DeleteCountry(country_id, callback);
};

let GetCountriesAPI = async (filter, callback) => {
    return await GetAllCountries(filter, callback);
};

let GetCountryAPI = async (country_id, callback) => {
    return await GetCountry(country_id, callback);
};

let CountryLookUpAPI = async (country_id, callback) => {
    return await CountryLookUp(country_id, callback);
};

module.exports = { AddCountryAPI, UpdateCountryAPI, DeleteCountryAPI, GetCountriesAPI, CountryLookUpAPI, GetCountryAPI };