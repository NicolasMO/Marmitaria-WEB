import React from "react"
import Header from "../../components/Header"

const Myprofile = () => {
    return (
        <>
            <Header />

            <div class='container'>
                <div id="profile_bg">
                    <div class="profile_data d-flex flex-row">
                        <div id="profile_image">
                            <img src={require('../../assets/profile.png')}></img>
                        </div>

                        <div class="profile_infos d-flex">
                            <div>
                                <div id="profile_header_name" class="profile_info_header">Nome</div>
                                <label class="profile_info">Nícolas Martins de Oliveira</label>
                                <br />
                                <div id="profile_header_number" class="profile_info_header">Telefone</div>
                                <label class="profile_info">(xx) xxxxx-xxxx</label>
                            </div>

                            <div id="profile_address_field">
                                <div id="profile_header_address" class="profile_info_header">Endereço p/ entrega</div>
                                <span><label class="profile_info">Endereço X, Rua Y Nº Z</label> <img src={require('../../assets/pencil-fill.png')} /> <img src={require('../../assets/trash-fill.png')} /></span>
                                <span><label class="profile_info">Endereço X, Rua Y Nº Z</label> <img src={require('../../assets/pencil-fill.png')} /> <img src={require('../../assets/trash-fill.png')} /></span>
                                <span><label class="profile_info">Endereço X, Rua Y Nº Z</label> <img src={require('../../assets/pencil-fill.png')} /> <img src={require('../../assets/trash-fill.png')} /></span>
                            </div>
                        </div>
                    </div>

                    <div class="profile_req">
                        <span>Meus pedidos</span>

                        <div id="profile_req_items">
                            <ul class="profile_item_list">
                                <li class="profile_item">
                                    <div class="profile_item_info">
                                        <span>Pedido #1234</span>
                                        <span>Data 20/03/2024</span>
                                        <span>Valor: R$ 10,00</span>
                                        <span><button class="btn_details">
                                            <a href="/">Detalhes</a>
                                        </button></span>
                                    </div>
                                </li>

                                <li class="profile_item">
                                    <div class="profile_item_info">
                                        <span>Pedido #1234</span>
                                        <span>Data 20/03/2024</span>
                                        <span>Valor: R$ 10,00</span>
                                        <span><button class="btn_details">
                                            <a href="/">Detalhes</a>
                                        </button></span>
                                    </div>
                                </li>

                                <li class="profile_item">
                                    <div class="profile_item_info">
                                        <span>Pedido #1234</span>
                                        <span>Data 20/03/2024</span>
                                        <span>Valor: R$ 10,00</span>
                                        <span><button class="btn_details">
                                            <a href="/">Detalhes</a>
                                        </button></span>
                                    </div>
                                </li>

                                <li class="profile_item">
                                    <div class="profile_item_info">
                                        <span>Pedido #1234</span>
                                        <span>Data 20/03/2024</span>
                                        <span>Valor: R$ 10,00</span>
                                        <span><button class="btn_details">
                                            <a href="/">Detalhes</a>
                                        </button></span>
                                    </div>
                                </li>

                                <li class="profile_item">
                                    <div class="profile_item_info">
                                        <span>Pedido #1234</span>
                                        <span>Data 20/03/2024</span>
                                        <span>Valor: R$ 10,00</span>
                                        <span><button class="btn_details">
                                            <a href="/">Detalhes</a>
                                        </button></span>
                                    </div>
                                </li>

                                <li class="profile_item">
                                    <div class="profile_item_info">
                                        <span>Pedido #1234</span>
                                        <span>Data 20/03/2024</span>
                                        <span>Valor: R$ 10,00</span>
                                        <span><button class="btn_details">
                                            <a href="/">Detalhes</a>
                                        </button></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Myprofile