import { useContext, useEffect, useState } from "react"
import { CarrinhoContexto } from "../carrinho"
import api from "../services/api"

export default function useDrinks() {
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

    const adicionarItemCarrinho = (produto) => {
        const logado = localStorage.getItem('@user')
        if (!logado) {
            alert("Necessita Logar!")
        } else {

            const produtoNome = produto.name
            const produtoPrice = produto.price
            const produtoTipo = produto.type

            setCarrinho({ produtoNome, produtoPrice, produtoTipo })
            window.location.reload()
        }
    }

    useEffect(() => {
        getDrinks()
    }, [])

    return { drink, adicionarItemCarrinho }
}