
const{ GetPayment, GetAllPayments, AddPayment, UpdatePayment, DeletePayment } = require('./../../Core/PaymentManager');

let AddPaymentAPI = async (payment, callback) => {
    return await AddPayment(payment, callback);
};

let UpdatePaymentAPI = async (payment_id, payment, callback) => {
    return await UpdatePayment(payment_id, payment, callback);
};

let DeletePaymentAPI = async (payment_id, callback) => {
    return await DeletePayment(payment_id, callback);
};

let GetPaymentAPI = async (payment_id, callback) => {
    return await GetPayment(payment_id, callback);
};

let GetPaymentsAPI = async (filter, callback) => {
    return await GetAllPayments(filter, callback);
};

module.exports = { AddPaymentAPI, UpdatePaymentAPI, DeletePaymentAPI, GetPaymentAPI, GetPaymentsAPI };