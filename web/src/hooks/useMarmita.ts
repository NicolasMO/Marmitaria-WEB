import { useContext, useRef, useState } from "react"
import api from "../services/api"
import { CarrinhoContexto } from "../carrinho"
import { useParams } from "react-router"

export default function useMarmita() {
    const template = {
        pequena: {
            nome: 'Marmita Pequena',
            preco: 12.00,
            proteinas: 1,
            guarnicoes: 2,
            complementos: 2
        },
        grande: {
            nome: 'Marmita Grande',
            preco: 16.00,
            proteinas: 2,
            guarnicoes: 3,
            complementos: 4
        }
    }

    // MarmitaPick
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

    // Page Marmita - index.js

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

    const { setCarrinho } = useContext(CarrinhoContexto)
    const { tipoMarmita } = useParams()
    
    const listaProteinasRef = useRef([])
    const listaGuarnicoesRef = useRef([])
    const listaComplementosRef = useRef([])
    
    const [proteinasMarcadas, setProteinasMarcadas] = useState(0)
    const [guarnicoesMarcadas, setGuarnicoesMarcadas] = useState(0)
    const [complementosMarcados, setComplementosMarcados] = useState(0)
    
    const hasItems = listaProteinasRef.current.length === 0 || listaGuarnicoesRef.current.length === 0

    function iniciarMontagemMarmita() {
        setCarrinho({})
    }

    const pedidoProteinas = (nomeProteinas, isChecked) => {
        if (nomeProteinas && typeof nomeProteinas === 'string') {
            if (isChecked) {
                listaProteinasRef.current.push(nomeProteinas);
                setProteinasMarcadas(prev => prev + 1);
            } else {
                const filteredArr = listaProteinasRef.current.filter(item => item !== nomeProteinas);
                listaProteinasRef.current = filteredArr;
                setProteinasMarcadas(prev => prev - 1);
            }
        }
    }

    const pedidoGuarnicoes = (nomeGuarnicoes, isChecked) => {
        if (nomeGuarnicoes && typeof nomeGuarnicoes === 'string') {
            if (isChecked) {
                listaGuarnicoesRef.current.push(nomeGuarnicoes)
                setGuarnicoesMarcadas(prev => prev + 1)
            } else {
                const filteredArr = listaGuarnicoesRef.current.filter(item => item !== nomeGuarnicoes)
                listaGuarnicoesRef.current = filteredArr
                setGuarnicoesMarcadas(prev => prev - 1)
            }
        }
    }

    const pedidoComplementos = (nomeComplementos, isChecked) => {
        if (nomeComplementos && typeof nomeComplementos === 'string') {
            if (isChecked) {
                listaComplementosRef.current.push(nomeComplementos)
                setComplementosMarcados(prev => prev + 1)
            } else {
                const filteredArr = listaComplementosRef.current.filter(item => item !== nomeComplementos)
                listaComplementosRef.current = filteredArr
                setComplementosMarcados(prev => prev - 1)
            }
        }
    }

    function montarMarmita() {
        if (listaProteinasRef.current.length === 0 || listaGuarnicoesRef.current.length === 0) {
            window.alert("Nenhuma proteína ou guarnição selecionada.");
        } else {
            const produtoNome = template[tipoMarmita].nome
            const produtoPrice = template[tipoMarmita].preco
            const produtoProt = `Proteínas: ${listaProteinasRef.current.join(", ")}`
            const produtoGuarn = `Guarnições: ${listaGuarnicoesRef.current.join(", ")}`
            const produtoComp = listaComplementosRef.current.length === 0 ? "Complementos: Nenhum" : `Complementos: ${listaComplementosRef.current.join(", ")}`
            const produtoTipo = 'Comida'

            setCarrinho({ produtoNome, produtoPrice, produtoProt, produtoGuarn, produtoComp, produtoTipo });
            window.location.reload()
        }
    }

    return { getMarmitas, marmita, getItems, proteina, guarnicao, complemento, iniciarMontagemMarmita, tipoMarmita, 
        listaProteinasRef, listaGuarnicoesRef, listaComplementosRef, hasItems,
        proteinasMarcadas, guarnicoesMarcadas, complementosMarcados, 
        pedidoProteinas, pedidoGuarnicoes, pedidoComplementos, montarMarmita, template }

}