import React, { useState, useEffect } from "react"

import MarmitaCard from "../MarmitaCard"
import useMarmita from "../../hooks/useMarmita.ts"

const MarmitaPick = () => {
    const { getMarmitas, marmita } = useMarmita()

    useEffect(() => {
        getMarmitas()
    }, [])


    return (
        <div class="container">
            <div id="marmita_bg">
                <h1 class="text-center pt-5"><strong>Escolha sua marmita</strong></h1>

                <div id="marmita_field" class="row">
                    {marmita.map((comida) => <MarmitaCard produto={comida} />)}
                </div>
            </div>
        </div >
    )
}

export default MarmitaPick