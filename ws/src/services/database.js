const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/marmitaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})