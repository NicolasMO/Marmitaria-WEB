import React from "react"
import { Link } from "react-router-dom"


const MarmitaCard = ({produto}) => {


    return (
        <>
            <div class="marmita_card d-flex flex-column align-items-center">
                <img src={require('../../assets/marmitapequena3.jpg')} />
                <h3>{produto.name} - R$ {produto.price.toFixed(2)}</h3>
                <p class="marmita_text">
                    {produto.desc}
                </p>
                <button id="btn_choose">
                    <Link to={`marmita/${produto.size}`}>Escolher</Link>
                </button>
            </div>
        </>
    )
}

export default MarmitaCard