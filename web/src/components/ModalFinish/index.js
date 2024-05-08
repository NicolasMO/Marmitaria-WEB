import React, { useRef } from "react"
import api from "../../services/api";

import ModalItemList from "../ModalItemList"
import useCarrinho from "../../hooks/useCarrinho.ts";

let formaPagamento = null
let enderecoSelecionado = null

const ModalFinish = ({ usuario }) => {
    let enderecos = []
    if(usuario) {enderecos = usuario.address}
    const checkboxRef  = useRef(null)
    const valueInputRef = useRef(null)
    const {compras, limparCarrinho, removerItem, somaCarrinho} = useCarrinho()
    
    const forceUpdate = React.useReducer(() => ({}))[1];

    const handleEnderecoSelecionado = (endereco) => {
        enderecoSelecionado = endereco
        forceUpdate()
    }
    
    const handlePagamentoChange = (e) => {
        formaPagamento = e.target.id
        
        if(formaPagamento === 'opcaoCartao') {
            formaPagamento = 'Cartão de Débito / Crédito'
            checkboxRef.current.disabled = true
            valueInputRef.current.disabled = true
        } else if (formaPagamento === 'opcaoDinheiro') {
            formaPagamento = 'Dinheiro'
            checkboxRef.current.disabled = false
            valueInputRef.current.disabled = false
        }
    }
    
    const handleFinalizarCompra = async () => {
        try {
            const pedido = {
              products: compras,
              totalPrice: somaCarrinho,
              paymentType: formaPagamento,
              deliveryAddress: enderecoSelecionado,
              id: usuario._id
            }
            
            const response = await api.post("/users/requests", pedido);
            
          limparCarrinho();
          alert("Pedido realizado com sucesso!");
        } catch (error) {
          console.error("Erro ao finalizar compra:", error);
          alert("Erro ao finalizar compra. Por favor, tente novamente.");
        }
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
                                    <button id="btn_dropdown" 
                                            className={`btn dropdown-toggle ${enderecoSelecionado ? 'enderecoSelecionado' : ''}`}
                                            type="button" 
                                            data-bs-toggle="dropdown"
                                    >
                                        {enderecoSelecionado ? enderecoSelecionado : 'Clique para escolher'}
                                    </button>
                                    <ul class="dropdown-menu">
                                    {enderecos.map((endereco, index) => (
                                            <li key={index}>
                                                <a
                                                    class="dropdown-item"
                                                    onClick={() => handleEnderecoSelecionado(endereco)}
                                                >
                                                    {endereco}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div id="finish_payment" class="col-6">
                                <span>Forma de pagamento:</span>
                                <div id="payment_field">
                                    <div id="payment_options_card" class="form-check">
                                        <input class="radio" type="radio" name="opcaoPagamento" id="opcaoCartao" onChange={handlePagamentoChange}/>
                                        <label class="form-check-label" for="opcaoCartao">
                                            Cartão de Débito/Crédito
                                        </label>
                                    </div>
                                    <div id="payment_options_money" class="form-check">
                                        <input class="radio" type="radio" name="opcaoPagamento" id="opcaoDinheiro" onChange={handlePagamentoChange}/>
                                        <label class="form-check-label" for="opcaoDinheiro">
                                            <span id="money_payment">Dinheiro</span>
                                        </label>
                                        <span id="checkbox_dinheiro">
                                            <input type="checkbox" value="dinheiro" id="dinheiro" ref={checkboxRef}/>
                                            <label class="form-check-label" for="dinheiro">Sem troco</label>
                                        </span>
                                        <p id="troco_field">Troco p/:
                                            <input type="number" id="dinheiro" placeholder="Exemplo: 50,00" ref={valueInputRef}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="modal_footer" class="modal-footer">
                        <button id="btn_modal_back" type="button" data-bs-dismiss="modal" onClick={() => window.location.reload()}>Voltar</button>
                        <button id="btn_modal_clear" type="button" onClick={() => limparCarrinho()}>Limpar Carrinho</button>
                        <button id="btn_modal_finish" type="button" onClick={handleFinalizarCompra}>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFinish