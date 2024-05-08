import React from "react"

const RequestInfo = ({ pedidoInfo }) => {
    const formatarData = (data) => {
        const dataObj = new Date(data);

        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    return (
        <li class="profile_req_item">
            <div class="profile_req_info">
                <span>Pedido {pedidoInfo.numberReq}</span>
                <span>Data {formatarData(pedidoInfo.dateReq)}</span>
                <span>Valor: R$ {pedidoInfo.totalPrice.toFixed(2)}</span>
                <span><button class="btn_details">
                    Detalhes
                </button></span>
            </div>
        </li>
    )
}

export default RequestInfo