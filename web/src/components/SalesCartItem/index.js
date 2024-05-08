import React from "react"

const SalesCartItem = ({ produto }) => {
    return (
        <li>{produto.produtoNome}: R$ {produto.produtoPrice.toFixed(2)}</li>
    )
}

export default SalesCartItem