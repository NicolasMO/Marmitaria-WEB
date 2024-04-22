const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/login', async (req, res) => {
    try {
        const credentials = req.body
        const usuario = await User.findOne(credentials)

        if (usuario) {
            res.json({ error: false, usuario })
        } else {
            res.json({ error: true, message: "Nenhum usuário encontrado."})
        }
    } catch (err) {
        res.json({ error: true, message: err.message})
    }
})

module.exports = router;