
const{ GetDelivery, GetAllDeliverys, AddDelivery, UpdateDelivery, DeleteDelivery } = require('./../../Core/DeliveryManager');

let AddDeliveryAPI = async (delivery, callback) => {
    return await AddDelivery(delivery, callback);
};

let UpdateDeliveryAPI = async (delivery_id, delivery, callback) => {
    return await UpdateDelivery(delivery_id, delivery, callback);
};

let DeleteDeliveryAPI = async (delivery_id, callback) => {
    return await DeleteDelivery(delivery_id, callback);
};

let GetDeliveryAPI = async (delivery_id, callback) => {
    return await GetDelivery(delivery_id, callback);
};

let GetDeliverysAPI = async (filter, callback) => {
    return await GetAllDeliverys(filter, callback);
};

module.exports = { AddDeliveryAPI, UpdateDeliveryAPI, DeleteDeliveryAPI, GetDeliveryAPI, GetDeliverysAPI };