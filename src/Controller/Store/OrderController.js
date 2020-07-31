
const{ GetOrder, GetAllOrders, AddOrder, UpdateOrder, DeleteOrder } = require('./../../Core/OrderManager');

let AddOrderAPI = async (order, callback) => {
    return await AddOrder(order, callback);
};

let UpdateOrderAPI = async (order_id, order, callback) => {
    return await UpdateOrder(order_id, order, callback);
};

let DeleteOrderAPI = async (order_id, callback) => {
    return await DeleteOrder(order_id, callback);
};

let GetOrderAPI = async (order_id, callback) => {
    return await GetOrder(order_id, callback);
};

let GetOrdersAPI = async (filter, callback) => {
    return await GetAllOrders(filter, callback);
};

module.exports = { AddOrderAPI, UpdateOrderAPI, DeleteOrderAPI, GetOrderAPI, GetOrdersAPI };