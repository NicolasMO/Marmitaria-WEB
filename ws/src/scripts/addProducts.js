const database = require('../services/database')

const Product = require('../models/product')
const productsJSON = require('../data/product.json')

const addProducts = async () => {
    try {
        for (let product of productsJSON) {
            await new Product(product).save()
        }
    } catch (err) {
        console.log(err.message)
    }
}

addProducts()