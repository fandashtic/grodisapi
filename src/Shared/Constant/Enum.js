let ApplicationType = {
    Company: 1,
    Store: 2,
    Consumer: 3,
    Delivery: 4
}

let ActiveStatus = {
    ACTIVE: 1,
    INACTIVE: 0
}

let PaymentStatus = {
    PENDING: 1,
    RECIVED: 2,
    PARCIALY_RECIVED: 3,
    REVISED: 4,
}

let UserType = {
    SUPER_ADMIN: 1,
    COMPANY_ADMIN: 2,
    STORE_ADMIN: 3,
    STORE_STAFF: 4,
    CONSUMER: 5,
    SUPPORT: 6,
}

let StoreType = [
    {
        value: '1',
        label: 'Wholesale',
    },
    {
        value: '2',
        label: 'Retail',
    },
    {
        value: '3',
        label: 'SuperMarket',
    },
    {
        value: '4',
        label: 'Stockist',
    }]

let ConsumerType = {
    PRIME: 1,
    NORMAL: 2,
}

let PaymentMode = {
    CASH: 1,
    CREDIT: 2,
    CHEQUE: 3,
    DD: 4,
    BANK_TRANSFER: 5,
    UPI: 6,
}

let CreditTerms = {
    NOCREDIT: 0,
    ONEWEEKDAYS: 2,
    TWOWEEKDAYS: 3,
    ONEMONTHDAYS: 4,
    TWOMONTHDAYS: 5,
    ONEYEARDAYS: 6,
}

let Event = {
    ADD: 1,
    EDIT: 2,
    UPDATE: 3,
    SAVE: 4,
    DELETE: 5,
    GET: 6,
    MAKE_ACTIVE: 7,
    MAKE_INACTIVE: 8,
    CANCEL: 9,
}

let PreFix = {
    Area: 'A',
    Brand: 'BR',
    Cart: 'CT',
    City: 'CY',
    Company: 'C',
    Country: 'CON',
    Delivery: 'DL',
    Inventory: 'I',
    Manufacture: 'MF',
    Order: 'O',
    Payment: 'PY',
    Product: 'PR',
    ProductCategory: 'PC',
    ProductFamily: 'PF',
    Scheme: 'SC',
    State: 'S',
    Store: 'ST',
    User: 'U'
}

module.exports = { ApplicationType, ActiveStatus, PaymentStatus, UserType, StoreType, ConsumerType, PaymentMode, CreditTerms, Event, PreFix };