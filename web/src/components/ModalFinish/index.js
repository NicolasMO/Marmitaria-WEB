import React from "react"

const ModalFinish = () => {
    return (
        <div class="modal fade" id="exampleModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div id="req_items" class="row">
                            <ul class="item_list">
                                <li class="item">
                                    <div class="item_info">
                                        <span>Marmita Grande</span>
                                        <span>Valor: R$ 16,00</span>
                                        <span>QTD: 1</span>
                                        <span>Valor Total: R$ 16,00</span>
                                    </div>
                                    <div class="item_desc">
                                        <p>Proteína: Carne assada.</p>
                                        <p>Guarnições: Arroz branco, Macarrão ao alho e oléo.</p>
                                        <p>Acompanhamento: Repolho refogado, Purê de batata.</p>
                                    </div>
                                    <button id="btn_remove">
                                        <a href="/">Remover</a>
                                    </button>
                                </li>
                                
                                <li class="item">
                                    <div class="item_info">
                                        <span>Marmita Pequena</span>
                                        <span>Valor: R$ 12,00</span>
                                        <span>QTD: 1</span>
                                        <span>Valor Total: R$ 12,00</span>
                                    </div>
                                    <div class="item_desc">
                                        <p>Proteína: Carne assada.</p>
                                        <p>Guarnições: Arroz branco, Macarrão ao alho e oléo.</p>
                                        <p>Acompanhamento: Repolho refogado, Purê de batata.</p>
                                    </div>
                                    <button id="btn_remove">
                                        <a href="/">Remover</a>
                                    </button>
                                </li>

                                <li class="item">
                                    <div class="item_info">
                                        <span class="drink_info">Refrigerante Coca Cola Lata</span>
                                        <span>Valor: R$ 5,00</span>
                                        <span>QTD: 1</span>
                                        <span>Valor Total: R$ 5,00</span>
                                    </div>
                                    <button id="btn_remove">
                                        <a href="/">Remover</a>
                                    </button>
                                </li>

                                <li class="item">
                                    <div class="item_info">
                                        <span>Marmita Grande</span>
                                        <span>Valor: R$ 16,00</span>
                                        <span>QTD: 1</span>
                                        <span>Valor Total: R$ 16,00</span>
                                    </div>
                                    <div class="item_desc">
                                        <p>Proteína: Carne assada.</p>
                                        <p>Guarnições: Arroz branco, Macarrão ao alho e oléo.</p>
                                        <p>Acompanhamento: Repolho refogado, Purê de batata.</p>
                                    </div>
                                    <button id="btn_remove">
                                        <a href="/">Remover</a>
                                    </button>
                                </li>

                                <li class="item">
                                    <div class="item_info">
                                        <span>Marmita Grande</span>
                                        <span>Valor: R$ 16,00</span>
                                        <span>QTD: 1</span>
                                        <span>Valor Total: R$ 16,00</span>
                                    </div>
                                    <div class="item_desc">
                                        <p>Proteína: Carne assada.</p>
                                        <p>Guarnições: Arroz branco, Macarrão ao alho e oléo.</p>
                                        <p>Acompanhamento: Repolho refogado, Purê de batata.</p>
                                    </div>
                                    <button id="btn_remove">
                                        <a href="/">Remover</a>
                                    </button>
                                </li>

                                <li class="item">
                                    <div class="item_info">
                                        <span>Marmita Grande</span>
                                        <span>Valor: R$ 16,00</span>
                                        <span>QTD: 1</span>
                                        <span>Valor Total: R$ 16,00</span>
                                    </div>
                                    <div class="item_desc">
                                        <p>Proteína: Carne assada.</p>
                                        <p>Guarnições: Arroz branco, Macarrão ao alho e oléo.</p>
                                        <p>Acompanhamento: Repolho refogado, Purê de batata.</p>
                                    </div>
                                    <button id="btn_remove">
                                        <a href="/">Remover</a>
                                    </button>
                                </li>
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
                                        <li><a class="dropdown-item">Rua Espanha, número 67</a></li>
                                        <li><a class="dropdown-item">Rua Canuto de Aguiar, número 133</a></li>
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
                        <button id="btn_modal_clear" type="button">Limpar Carrinho</button>
                        <button id="btn_modal_finish" type="button">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFinish