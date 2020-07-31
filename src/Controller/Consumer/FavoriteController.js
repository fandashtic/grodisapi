const{ GetAllFavorites, AddFavorite, UpdateFavorite, DeleteFavorite } = require('./../../Core/FavoriteManager');

let AddFavoriteAPI = async (favorite, callback) => {
    return await AddFavorite(favorite, callback);
};

let UpdateFavoriteAPI = async (favorite_id, favorite, callback) => {
    return await UpdateFavorite(favorite_id, favorite, callback);
};

let DeleteFavoriteAPI = async (favorite_id, callback) => {
    return await DeleteFavorite(favorite_id, callback);
};

let GetFavoritesAPI = async (filter, callback) => {
    return await GetAllFavorites(filter, callback);
};

module.exports = { AddFavoriteAPI, UpdateFavoriteAPI, DeleteFavoriteAPI, GetFavoritesAPI };