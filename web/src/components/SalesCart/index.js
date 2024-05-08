import React from "react"
import SalesCartItem from "../SalesCartItem"
import useCarrinho from "../../hooks/useCarrinho.ts"

const SalesCart = ({ usuario }) => {

    const { compras, somaCarrinho, moved, handleClick } = useCarrinho()
    const handleCloseSidebar = () => {
        const closeButton = document.querySelector("[data-bs-dismiss='offcanvas']");
        
        if (closeButton) {
            closeButton.click(); 
        }
    }

    return (
        <>
        {usuario &&
            <button 
                id="cartButton" 
                class="btn" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasScrolling" 
                aria-controls="offcanvasScrolling"
                style={{ marginRight: moved ? "295px" : "0" }}
                onClick={handleClick}>
                    {moved ? "Fechar Carrinho" : "Abrir Carrinho"}
            </button>
        }

            <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Carrinho de Produtos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleClick}></button>
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
                <button id="finishCartButton" class="btn" type="button" data-bs-toggle='modal' data-bs-target="#exampleModal" onClick={handleCloseSidebar}>Finalizar Pedido</button>
            </div>
        </>
    )
}

export default SalesCart