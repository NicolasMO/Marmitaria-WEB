import { useState } from "react"
import api from "../services/api"

export default function useMarmita() {

    const [proteina, setProteina] = useState([])
    const [guarnicao, setGuarnicao] = useState([])
    const [complemento, setComplemento] = useState([])

    const getItems = async () => {

        try {
            const responseProteinas = await api.get('/marmita/montagem/?type=Proteinas')
            const resProteinas = responseProteinas.data

            const responseGuarnicoes = await api.get('/marmita/montagem/?type=Guarnições')
            const resGuarnicoes = responseGuarnicoes.data

            const responseComplementos = await api.get('/marmita/montagem/?type=Complementos')
            const resComplementos = responseComplementos.data

            if (resProteinas.error) {
                alert(resProteinas.message)
                return false
            }

            setProteina(resProteinas.ingredients)
            setGuarnicao(resGuarnicoes.ingredients)
            setComplemento(resComplementos.ingredients)
        } catch (err) {
            alert(err.message)
        }
    }

    return { getItems, proteina, guarnicao, complemento }

}