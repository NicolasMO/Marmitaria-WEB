const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// RECUPERAR TODOS OS REGISTROS
router.get('/', async (req, res) => {
    try {
        const produtos = await Product.find({})
        res.json({ error: false, produtos })        
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

// Pegar produtos do tipo especifico
router.get('/produto', async (req, res) => {
    try {
        const comidas = await Product.find(req.query)
        res.json({ comidas })        
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

// RECUPERAR APENAS UM REGISTRO POR ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const produto = await Product.findById(id)
        res.json({ error: false, produto })    
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

// CRIAR UM REGISTRO
router.post('/', async (req, res) => {
    try {
        const produto = req.body
        const response = await new Product(produto).save()
        res.json({ error: false, produto: response })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

// ATUALIZAR UM REGISTRO
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const novo_produto = req.body
        const produto = await Product.findByIdAndUpdate(id, novo_produto)
        res.json({ error: false, produto})    
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

// DELETAR UM REGISTRO
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await Product.findByIdAndDelete(id)
        res.json({ error: false })
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})


module.exports = router