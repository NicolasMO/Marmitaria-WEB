import React, { useContext, useState ,useEffect } from "react"
import { CarrinhoContexto } from "../../carrinho"
import SalesCartItem from "../SalesCartItem"

const SalesCart = () => {
    
    const { carrinho } = useContext(CarrinhoContexto)
    const [compras, setCompras] = useState(() => {
        const storedCompras = localStorage.getItem("compras");
        return storedCompras ? JSON.parse(storedCompras) : [];
    })

    const somaCarrinho = compras.reduce((acumulador, produtoAtual) => {
        return acumulador + produtoAtual.produtoPrice
    }, 0)

    useEffect(() => {
        if (carrinho && Object.keys(carrinho).length !== 0) { // Verifica se carrinho não está vazio
            const updatedCompras = [...compras, carrinho];
            setCompras(updatedCompras);
            localStorage.setItem("compras", JSON.stringify(updatedCompras))
        }
    }, [carrinho])

    return (
        <>
            <button id="cartButton" class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Abrir Carrinho</button>

            <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Carrinho de Produtos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div id="cartItems">
                        <ul>
                            {compras.map((item) =>
                                <SalesCartItem produto={item} />)}
                        </ul>
                    </div>
                </div>

                <div id="cartTotal">
                    <p>TOTAL: R$: {somaCarrinho.toFixed(2)}</p>
                </div>
                <button id="finishCartButton" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar Pedido</button>
            </div>
        </>
    )
}

export default SalesCart