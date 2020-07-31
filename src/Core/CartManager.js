const { GetById, GetAll, Save, Update, Delete } = require('./../Data/Cart');

let IsCartValid = async (cartName, password, callback) => {
    return await GetById(cartName, async (cart) => {
        if (cart.password === password) {
            return await callback({
                'data': {
                    CartName: cart.cartName,
                    CartDisplayName: cart.firstName + ' ' + cart.lastName,
                    CartType: cart.cartType,
                    CompanyId: cart.companyId,
                    store_id: cart.store_id,
                    CartProfileImage: cart.profileImageUrl
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

let AddCart = async (cart, callback) => {
    return await Save(cart, async (cart) => {
        if (cart) {
            return await callback({
                'data': cart,
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

let UpdateCart = async (key, cart, callback) => {
    return await Update(key, cart, async (cart) => {
        if (cart) {
            return await callback({
                'data': cart,
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

let DeleteCart = async (key, callback) => {
    return await Delete(key, async (cart) => {
        if (cart) {
            return await callback({
                'data': cart,
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

let GetCart = async (cartName, callback) => {
    return await GetById(cartName, async (cart) => {
        if (cart) {
            return await callback({
                'data': cart,
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

let GetAllCarts = async (filter, callback) => {
    return await GetAll(filter, async (carts) => {
        if (carts) {
            return await callback({
                'data': carts,
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

module.exports = { IsCartValid, AddCart, UpdateCart, DeleteCart, GetCart, GetAllCarts };