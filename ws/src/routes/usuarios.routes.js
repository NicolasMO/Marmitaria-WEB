const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Request = require('../models/request')

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

router.post('/requests', async (req, res) => {
    try {
        const ultimoPedido = await Request.findOne().sort({ numberReq: -1 });
        let proximoNumeroPedido = 1

        if (ultimoPedido) {
            proximoNumeroPedido = ultimoPedido.numberReq + 1;
        }

        const { products,  totalPrice, paymentType, deliveryAddress, id } = req.body

        const newRequest = new Request({
            products,
            numberReq: proximoNumeroPedido,
            totalPrice,
            paymentType,
            deliveryAddress
        })

        await newRequest.save()

        console.log(id)
        const user = await User.findById(id)
        user.requests.push(newRequest._id)
        await user.save()

        res.status(201).json(newRequest)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Erro ao criar pedido'})
    }
})

router.get('/requests/list', async (req, res) => {
    try {
        if (!req.query.userId) {
            return res.status(400).json({ message: 'Parametro userId não fornecido'})
        }

        const userId = req.query.userId
        const user = await User.findById(userId)
        console.log(user)

        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado'})
        }

        const pedidos = await Request.find({ _id: {$in: user.requests }})
        res.status(200).json(pedidos)
    } catch (err) {
        console.error(err)
    }
})

router.post('/register', async (req, res) => {
    try {
        const { name, email, password, number, address } = req.body;

        // Verifica se o email já está em uso
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: true, message: 'O email já está em uso' });
        }

        // Cria um novo usuário
        const newUser = new User({
            name,
            email,
            password,
            number,
            address: address // Limita o número de endereços a 3
        });

        // Salva o novo usuário no banco de dados
        await newUser.save();

        res.status(201).json({ success: true, message: 'Usuário registrado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: true, message: 'Erro ao registrar usuário' });
    }
})

module.exports = router;