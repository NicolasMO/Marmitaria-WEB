const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const requestSchema = new mongoose.Schema({
    products: [],
    numberReq: Number,
    dateReq: { type: Date, default: Date.now },
    totalPrice: Number,
    paymentType: String,
    deliveryAddress: String
})
// Crie o modelo de pedido usando o schema
const Request = mongoose.model('Request', requestSchema);

module.exports = Request;