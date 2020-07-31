const { GetById, GetAll, Save, Update, Delete } = require('./../Data/Delivery');

let IsDeliveryValid = async (deliveryName, password, callback) => {
    return await GetById(deliveryName, async (delivery) => {
        if (delivery.password === password) {
            return await callback({
                'data': {
                    DeliveryName: delivery.deliveryName,
                    DeliveryDisplayName: delivery.firstName + ' ' + delivery.lastName,
                    DeliveryType: delivery.deliveryType,
                    CompanyId: delivery.companyId,
                    store_id: delivery.store_id,
                    DeliveryProfileImage: delivery.profileImageUrl
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

let AddDelivery = async (delivery, callback) => {
    return await Save(delivery, async (delivery) => {
        if (delivery) {
            return await callback({
                'data': delivery,
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

let UpdateDelivery = async (key, delivery, callback) => {
    return await Update(key, delivery, async (delivery) => {
        if (delivery) {
            return await callback({
                'data': delivery,
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

let DeleteDelivery = async (key, callback) => {
    return await Delete(key, async (delivery) => {
        if (delivery) {
            return await callback({
                'data': delivery,
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

let GetDelivery = async (deliveryName, callback) => {
    return await GetById(deliveryName, async (delivery) => {
        if (delivery) {
            return await callback({
                'data': delivery,
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

let GetAllDeliverys = async (filter, callback) => {
    return await GetAll(filter, async (deliverys) => {
        if (deliverys) {
            return await callback({
                'data': deliverys,
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

module.exports = { IsDeliveryValid, AddDelivery, UpdateDelivery, DeleteDelivery, GetDelivery, GetAllDeliverys };