const{ AddArea, UpdateArea, DeleteArea, GetArea, GetAllAreas, AreaLookUp } = require('./../../Core/AreaManager');

let AddAreaAPI = async (area, callback) => {
    return await AddArea(area, callback);
};

let UpdateAreaAPI = async (area_id, area, callback) => {
    return await UpdateArea(area_id, area, callback);
};

let DeleteAreaAPI = async (area_id, callback) => {
    return await DeleteArea(area_id, callback);
};

let GetAreaAPI = async (area_id, callback) => {
    return await GetArea(area_id, callback);
};

let GetAreasAPI = async (filter, callback) => {
    return await GetAllAreas(filter, callback);
};

let AreaLookUpAPI = async (area_id, callback) => {
    return await AreaLookUp(area_id, callback);
};

module.exports = { AddAreaAPI, UpdateAreaAPI, DeleteAreaAPI, GetAreaAPI, GetAreasAPI, AreaLookUpAPI };