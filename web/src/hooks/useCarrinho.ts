import { useContext, useEffect, useState } from "react";
import { CarrinhoContexto } from "../carrinho";

export default function useCarrinho() {

    const { carrinho } = useContext(CarrinhoContexto)

    // SalesCart

    const [compras, setCompras] = useState(() => {
        const storedCompras = localStorage.getItem("compras");
        return storedCompras ? JSON.parse(storedCompras) : [];
    })
    
    const somaCarrinho = compras.reduce((acumulador, produtoAtual) => {
        return acumulador + produtoAtual.produtoPrice
    }, 0)
    
    const [moved, setMoved] = useState(false);

    const handleClick = () => {
        setMoved((prevMoved) => !prevMoved); 
    }

    // ModalFinish

    const limparCarrinho = () => {
        window.location.reload()
        localStorage.removeItem('compras')
    }

    const removerItem = (id) => {
        const updatedCompras = compras.filter((_, item) => item !== id)
        setCompras(updatedCompras)
        localStorage.setItem("compras", JSON.stringify(updatedCompras))
    }

    // useEffect
    useEffect(() => {
        if (carrinho && Object.keys(carrinho).length !== 0) { 
            const updatedCompras = [...compras, carrinho];
            setCompras(updatedCompras);
            localStorage.setItem("compras", JSON.stringify(updatedCompras))
        }
    }, [carrinho])

    return { compras, somaCarrinho, moved, handleClick, limparCarrinho, removerItem }
}