const mongoose = require('mongoose')

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    number: Number,
    address: Array,
    requests: [{ type: mongoose.Types.ObjectId, ref: 'Request'}]
})

module.exports = User