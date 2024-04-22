const express = require('express')
const router = express.Router()
const Ingredient = require('../models/ingredients')

router.get('/montagem', async (req, res) => {
    try {
        const ingredients = await Ingredient.find(req.query)
        res.json({ error: false, ingredients })        
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

module.exports = router