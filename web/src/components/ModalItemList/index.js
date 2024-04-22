import React from "react"

const ModalItemList = ({ index, item, remover }) => {
    const removerItem = () => {
        remover(index)
    }

    return (
        <> {item.produtoTipo === 'Comida' && (
            <li class="item">
                <div class="item_info">
                    <span>{item.produtoNome}</span>
                    <span>Valor: R$ {item.produtoPrice.toFixed(2)}</span>
                    <span>QTD: 1</span>
                    <span>Valor Total: R$ {item.produtoPrice.toFixed(2)}</span>
                </div>
                <div class="item_desc">
                    <p>{item.produtoProt}.</p>
                    <p>{item.produtoGuarn}.</p>
                    <p>{item.produtoComp}.</p>
                </div>
                <button id="btn_remove" onClick={removerItem}>
                    Remover
                </button>
            </li>
        )}
        {item.produtoTipo === 'Drink' && (
            <li class="item">
            <div class="item_info">
                <span class="drink_info">{item.produtoNome}</span>
                <span>Valor: R$ {item.produtoPrice.toFixed(2)}</span>
                <span>QTD: 1</span>
                <span>Valor Total: R$ {item.produtoPrice.toFixed(2)}</span>
            </div>
            <button id="btn_remove" onClick={removerItem}>
                Remover
            </button>
        </li>
        )}
        </>
    )
}

export default ModalItemList