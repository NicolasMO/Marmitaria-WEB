const mongoose = require('mongoose')

const Marmita = mongoose.model('Marmita', {
    montagem: Array,
    qtdProt: Number,
    qtdGuarn: Number,
    qtdComp: Number
})

module.exports = Marmita