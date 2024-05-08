import React, { useState, useEffect, useContext } from "react"

import api from "../../services/api"

import DrinksCard from "../DrinksCard"
import useDrinks from "../../hooks/useDrinks.ts"

const Drinks = () => {

    const { drink, adicionarItemCarrinho } = useDrinks()

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