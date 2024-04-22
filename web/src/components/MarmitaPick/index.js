import React, { useState, useEffect, useContext } from "react"

import api from "../../services/api"
import MarmitaCard from "../MarmitaCard"

const MarmitaPick = () => {

    const [marmita, setMarmita] = useState([])

    const getMarmitas = async () => {
        try {
            const response = await api.get('/produto/?type=Comida')
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }
            
            setMarmita(res.comidas)
        } catch (err) {
            alert(err.message)
        }
    }

    useEffect(() => {
        getMarmitas()
    }, [])

    return (
        <div class="container">
            <div id="marmita_bg">
                <h1 class="text-center bold pt-5"><strong>Escolha sua marmita</strong></h1>

                <div id="marmita_field" class="row">
                    {marmita.map((comida) => <MarmitaCard produto={comida} />)}
                </div>
            </div>
        </div >
    )
}

export default MarmitaPick