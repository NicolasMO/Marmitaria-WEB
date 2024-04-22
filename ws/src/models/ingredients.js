const mongoose = require('mongoose')

const Ingredients = mongoose.model('Ingredients', {
    name: String,
    type: String,
    thumb: String,
    value: String
})

module.exports = Ingredients