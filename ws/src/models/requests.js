const mongoose = require('mongoose')

const Request = mongoose.model('Request', {
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    numberReq: Number,
    dateReq: Date,
    totalPrice: Number,
    details: String
})

module.exports = Request