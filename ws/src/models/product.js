const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    type: String,
    desc: String,
    thumb: String
})

module.exports = Product