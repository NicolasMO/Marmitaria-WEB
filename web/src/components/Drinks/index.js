import React from "react"

const Drinks = () => {
    return (
        <div class="container">
            <div id="drinks_bg">
                <h1 class="text-center bold pt-5"><strong>Escolha sua bebida</strong></h1>

                <div id="drink_field" class="row justify-content-center">
                    <div class="col-4">
                        <div id="drink_type" class="d-flex flex-column align-items-center">
                            <img src={require('../../assets/latacoca.jpg')} />
                            <h3>Coca Cola Lata - R$ 5,00</h3>
                            <p id="drink_text">
                                Refrigerante Coca Cola 350ml
                            </p>
                            <button id="btn_add_drink" value="0">
                                <span>adicionar</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-4">
                        <div id="drink_type" class="d-flex flex-column align-items-center">
                            <img src={require('../../assets/latacocazero.jpg')} />
                            <h3>Coca Zero Lata - R$ 6,00</h3>
                            <p id="drink_text">
                                Refrigerante Coca Zero 350ml
                            </p>
                            <button id="btn_add_drink" value="0">
                                <span>adicionar</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-4">
                        <div id="drink_type" class="d-flex flex-column align-items-center">
                            <img src={require('../../assets/latafanta - Copia.jpg')} />
                            <h3>Fanta Laranja Lata - R$ 5,00</h3>
                            <p id="drink_text">
                                Refrigerante Fanta Laranja 350ml
                            </p>
                            <button id="btn_add_drink" value="0">
                                <span>adicionar</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-4">
                        <div id="drink_type" class="d-flex flex-column align-items-center">
                            <img src={require('../../assets/lataguarana - Copia.jpg')} />
                            <h3>Guaraná Lata - R$ 5,00</h3>
                            <p id="drink_text">
                                Refrigerante Guaraná 350ml
                            </p>
                            <button id="btn_add_drink" value="0">
                                <span>adicionar</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-4">
                        <div id="drink_type" class="d-flex flex-column align-items-center">
                            <img src={require('../../assets/agua.png')} />
                            <h3>Água Mineral - R$ 3,00</h3>
                            <p id="drink_text">
                                Água mineral 350ml
                            </p>
                            <button id="btn_add_drink" value="0">
                                <span>adicionar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drinks