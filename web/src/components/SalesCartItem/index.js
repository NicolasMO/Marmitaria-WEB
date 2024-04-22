import React from "react"

const SalesCartItem = (produto) => {
    return (
        <li>{produto.produto.produtoNome}: R$ {produto.produto.produtoPrice.toFixed(2)}</li>
    )
}

export default SalesCartItem