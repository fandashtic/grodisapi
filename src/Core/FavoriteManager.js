const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Favorite');

let IsFavoriteValid = async (favorite_name, password, callback) => {
    return await GetById(favorite_name, async (favorite) => {
        if (favorite.password === password) {
            return await callback({
                'data': {
                    FavoriteName: favorite.favorite_name,
                    FavoriteDisplayName: favorite.firstName + ' ' + favorite.lastName,
                    FavoriteType: favorite.favoriteType,
                    CompanyId: favorite.companyId,
                    store_id: favorite.store_id,
                    FavoriteProfileImage: favorite.profileImageUrl
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

let AddFavorite = async (favorite, callback) => {
    return await Save(favorite, async (favorite) => {
        if (favorite) {
            return await callback({
                'data': favorite,
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

let UpdateFavorite = async (key, favorite, callback) => {
    return await Update(key, favorite, async (favorite) => {
        if (favorite) {
            return await callback({
                'data': favorite,
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

let DeleteFavorite = async (key, callback) => {
    return await Delete(key, async (favorite) => {
        if (favorite) {
            return await callback({
                'data': favorite,
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

let GetFavorite = async (favorite_name, callback) => {
    return await GetById(favorite_name, async (favorite) => {
        if (favorite) {
            return await callback({
                'data': favorite,
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

let GetAllFavorites = async (filter, callback) => {
    return await GetAll(filter, async (favorites) => {
        if (favorites) {
            return await callback({
                'data': favorites,
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

module.exports = { IsFavoriteValid, AddFavorite, UpdateFavorite, DeleteFavorite, GetFavorite, GetAllFavorites };