const{ GetCart, GetAllCarts, AddCart, UpdateCart, DeleteCart } = require('../../Core/CartManager');

let AddCartAPI = async (cart, callback) => {
    return await AddCart(cart, callback);
};

let UpdateCartAPI = async (cart_id, cart, callback) => {
    return await UpdateCart(cart_id, cart, callback);
};

let DeleteCartAPI = async (cart_id, callback) => {
    return await DeleteCart(cart_id, callback);
};

let GetCartAPI = async (cart_id, callback) => {
    return await GetCart(cart_id, callback);
};

let GetCartsAPI = async (filter, callback) => {
    return await GetAllCarts(filter, callback);
};

module.exports = { AddCartAPI, UpdateCartAPI, DeleteCartAPI, GetCartAPI, GetCartsAPI };