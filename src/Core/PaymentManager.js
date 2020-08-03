const { GetbyColumn, GetById, GetAll, Save, Update, Delete } = require('./../Data/Payment');

let IsPaymentValid = async (paymentName, password, callback) => {
    return await GetById(paymentName, async (payment) => {
        if (payment.password === password) {
            return await callback({
                'data': {
                    PaymentName: payment.paymentName,
                    PaymentDisplayName: payment.firstName + ' ' + payment.lastName,
                    PaymentType: payment.paymentType,
                    CompanyId: payment.companyId,
                    store_id: payment.store_id,
                    PaymentProfileImage: payment.profileImageUrl
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

let AddPayment = async (payment, callback) => {
    return await Save(payment, async (payment) => {
        if (payment) {
            return await callback({
                'data': payment,
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

let UpdatePayment = async (key, payment, callback) => {
    return await Update(key, payment, async (payment) => {
        if (payment) {
            return await callback({
                'data': payment,
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

let DeletePayment = async (key, callback) => {
    return await Delete(key, async (payment) => {
        if (payment) {
            return await callback({
                'data': payment,
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

let GetPayment = async (paymentName, callback) => {
    return await GetById(paymentName, async (payment) => {
        if (payment) {
            return await callback({
                'data': payment,
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

let GetAllPayments = async (filter, callback) => {
    return await GetAll(filter, async (payments) => {
        if (payments) {
            return await callback({
                'data': payments,
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

module.exports = { IsPaymentValid, AddPayment, UpdatePayment, DeletePayment, GetPayment, GetAllPayments };