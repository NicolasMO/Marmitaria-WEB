const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const database = require('./src/services/database')
const cors = require('cors')
const app = express()

const productRoutes = require('./src/routes/produtos.routes')
const userRoutes = require('./src/routes/usuarios.routes')
const ingredientRoutes = require('./src/routes/ingredientes.routes')

// Middlewares
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('dev'))

// Routes
app.use('/', productRoutes)
app.use('/users', userRoutes)
app.use('/marmita', ingredientRoutes)

app.listen(3001, () => {
    console.log('Meu servidor está funcionando')
})