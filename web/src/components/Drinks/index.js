import React, { useState, useEffect, useContext } from "react"

import api from "../../services/api"

import DrinksCard from "../DrinksCard"
import { CarrinhoContexto } from "../../carrinho"

const Drinks = () => {

    const [drink, setDrink] = useState([])
    const { setCarrinho } = useContext(CarrinhoContexto)

    const getDrinks = async () => {
        try {
            const response = await api.get('/produto/?type=Drink')
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }

            setDrink(res.comidas)
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getDrinks()
    }, [])

    const adicionarItemCarrinho = (produto) => {
        const produtoNome = produto.name
        const produtoPrice = produto.price
        const produtoTipo = produto.type
        
        setCarrinho({ produtoNome, produtoPrice, produtoTipo })
        window.location.reload()
    }

    return (
        <div class="container">
            <div id="drinks_bg">
                <h1 class="text-center bold pt-5"><strong>Escolha sua bebida</strong></h1>

                <div id="drink_field" class="row justify-content-center">
                    {drink.map((produto) => <DrinksCard 
                                                produto={produto} 
                                                adicionar={(item) => adicionarItemCarrinho(item)}
                                                />)}
                </div>
            </div>
        </div>
    )
}

export default Drinks