import React, { useState } from "react"

import ModalItemList from "../ModalItemList"

const ModalFinish = () => {
    
    const [compras, setCompras] = useState(() => {
        const storedCompras = localStorage.getItem('compras');
        return storedCompras ? JSON.parse(storedCompras) : [];
      });
    
    const limparCarrinho = () => {
        window.location.reload()
        localStorage.clear()
    }

    const removerItem = (id) => {
        const updatedCompras = compras.filter((_, item) => item !== id)
        setCompras(updatedCompras)
        localStorage.setItem("compras", JSON.stringify(updatedCompras))
    }


    return (
        <div class="modal fade" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div id="req_items" class="row">
                            <ul class="item_list">
                                {compras.map((produto, index) => <ModalItemList 
                                                                    key={index} 
                                                                    item={produto} 
                                                                    remover={() => removerItem(index)}
                                                                />)}
                            </ul>
                        </div>
                        <div id="finish_options" class="row">
                            <div id="finish_address" class="col-6">
                                <span>Endereço p/ entrega:</span>
                                <div class="dropdown">
                                    <button id="btn_dropdown" class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                        Clique para escolher
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item">Rua Tal, número 123</a></li>
                                        <li><a class="dropdown-item">Rua Tal, número 123</a></li>
                                        <li><a class="dropdown-item">Rua Tal, número 123</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div id="finish_payment" class="col-6">
                                <span>Forma de pagamento:</span>
                                <div id="payment_field">
                                    <div id="payment_options_card" class="form-check">
                                        <input class="radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Cartão de Débito/Crédito
                                        </label>
                                    </div>
                                    <div id="payment_options_money" class="form-check">
                                        <input class="radio" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            <span id="money_payment">Dinheiro
                                            </span>
                                        </label>
                                        <span id="radio_dinheiro">
                                            <input type="checkbox" value="" id="dinheiro" />
                                            <label class="form-check-label" for="dinheiro">Sem troco</label>
                                        </span>
                                        <p id="troco_field">Troco p/:
                                            <input type="number" value="" id="dinheiro" placeholder=" Exemplo: 50,00" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="modal_footer" class="modal-footer">
                        <button id="btn_modal_back" type="button" data-bs-dismiss="modal">Voltar</button>
                        <button id="btn_modal_clear" type="button" onClick={() => limparCarrinho()}>Limpar Carrinho</button>
                        <button id="btn_modal_finish" type="button">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFinish