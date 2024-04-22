const database = require('../services/database')

const Ingredient = require('../models/ingredients')
const ingredientsJSON = require('../data/ingredients.json')

const addIngredients = async () => {
    try {
        for (let ingredient of ingredientsJSON) {
            await new Ingredient(ingredient).save()
        }
    } catch (err) {
        console.log(err.message)
    }
}

addIngredients()