import React from "react"

const SalesCart = () => {
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
                        <p>Marmita Grande: R$ 16,00</p>
                        <p>Marmita Pequena: R$ 12,00</p>
                        <p>Coca Cola Lata: R$ 5,00</p>
                        <p>Água Mineral: R$ 3,00</p>
                    </div>
                </div>

                <div id="cartTotal">
                    <p>TOTAL: R$: 36,00</p>
                </div>
                <button id="finishCartButton" class="btn" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">Finalizar Pedido</button>
            </div>
        </>
    )
}

export default SalesCart