import React from "react"

const MarmitaPick = () => {
    return (
        <div class="container">
            <div id="marmita_bg">
                <h1 class="text-center bold pt-5"><strong>Escolha sua marmita</strong></h1>

                <div id="marmita_field" class="row">
                    <div id="marmita_type" class="d-flex flex-column align-items-center">
                        <img src={require('../../assets/marmitapequena3.jpg')}  />
                        <h3>Marmita Pequena - R$ 12,00</h3>
                        <p id="marmita_text">
                            <text>Marmita pequena, servida numa hamburgueira.</text>
                            <br />
                            <text>Escolha 1 proteína, 2 guarnições e 2 complementos.</text>
                            <br />
                            <text>Serve 1 pessoa.</text>
                        </p>
                        <button id="btn_choose">
                            <a href="/marmita">Escolher</a>
                        </button>
                    </div>
                    <div id="marmita_type" class="d-flex flex-column align-items-center">
                        <img src={require('../../assets/marmita.jpg')} />
                        <h3 id="marmita_2">Marmita Grande - R$ 16,00</h3>
                        <p id="marmita_text">
                            <text>Marmita grande, pote de 1100ML.</text>
                            <br />
                            <text>Escolha 2 proteínas, 3 guarnições e 4 complementos.</text>
                            <br />
                            <text>Serve 1-2 pessoa.</text>
                        </p>
                        <button id="btn_choose">
                            <a href="/marmita">Escolher</a>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MarmitaPick