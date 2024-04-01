import React from "react"
import Header from "../../components/Header"

const Marmita = () => {
    return (
        <>
            <Header />

            <div class="container">
                <div id="marmitacomp_bg">
                    <h1 class="text-center bold pt-5"><strong>Monte sua marmita</strong></h1>

                    <div class="row">
                        <div id="marmita_comp" class="col-8">
                            <div class="row">
                                <div class="col-6">
                                    <h2>PROTEÍNAS - Max 1</h2>
                                    <div id="comp_1">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                            <label class="form-check-label" for="flexCheckDefault1">Peito de frango assado</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label class="form-check-label" for="flexCheckDefault2">Carne trinchada</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                            <label class="form-check-label" for="flexCheckDefault3">Omelete c/ frango e queijo</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                            <label class="form-check-label" for="flexCheckDefault4">Almondegas</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                                            <label class="form-check-label" for="flexCheckDefault5">Bife de soja</label>
                                        </div>
                                    </div>

                                    <h2>GUARNIÇÕES - Max 2</h2>
                                    <div id="comp_2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="guarnicoesFlexCheckDefault1" />
                                            <label class="form-check-label" for="guarnicoesFlexCheckDefault1">Arroz branco</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="guarnicoesFlexCheckDefault2" />
                                            <label class="form-check-label" for="guarnicoesFlexCheckDefault2">Baião</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="guarnicoesFlexCheckDefault3" />
                                            <label class="form-check-label" for="guarnicoesFlexCheckDefault3">Feijão Carioca</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="guarnicoesFlexCheckDefault4" />
                                            <label class="form-check-label" for="guarnicoesFlexCheckDefault4">Macarrão ao alho e óleo</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="guarnicoesFlexCheckDefault5" />
                                            <label class="form-check-label" for="guarnicoesFlexCheckDefault5">Arroz integral</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <h2>COMPLEMENTOS - Max 2</h2>
                                    <div id="comp_3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault1" />
                                            <label class="form-check-label" for="acompFlexCheckDefault1">Batata cozida</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault2" />
                                            <label class="form-check-label" for="acompFlexCheckDefault2">Vinagrete</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault3" />
                                            <label class="form-check-label" for="acompFlexCheckDefault3">Repolho refogado</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault4" />
                                            <label class="form-check-label" for="acompFlexCheckDefault4">Batata doce cozida</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault5" />
                                            <label class="form-check-label" for="acompFlexCheckDefault5">Suflê de xuxu</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault6" />
                                            <label class="form-check-label" for="acompFlexCheckDefault6">Salada verde</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault7" />
                                            <label class="form-check-label" for="acompFlexCheckDefault7">Cenoura ralada</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault8" />
                                            <label class="form-check-label" for="acompFlexCheckDefault8">Legumes com maionese</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault9" />
                                            <label class="form-check-label" for="acompFlexCheckDefault9">Farofa de ovo</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="acompFlexCheckDefault10" />
                                            <label class="form-check-label" for="acompFlexCheckDefault10">Abóbora cozida</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div id="marmita_img" class="row">
                                <div>
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                    <img src={require("../../assets/arrozbranco.jpg")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="marmita_buttons">
                        <button id="btn_back">
                            <a href="/">Voltar</a>
                        </button>
                        <button id="btn_finish">
                            <a href="/">Adicionar no Carrinho</a>
                        </button>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Marmita