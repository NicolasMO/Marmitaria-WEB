import React, { useContext, useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Header from "../../components/Header"
import MarmitaItem from "../../components/MarmitaItem"

import { CarrinhoContexto } from "../../carrinho"

import useMarmita from "../../hooks/useMarmita.ts"

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

const Marmita = () => {

    const { getItems, proteina, guarnicao, complemento } = useMarmita()

    function iniciarMontagemMarmita() {
        setCarrinho({})
    }

    useEffect(() => {
        getItems()
        iniciarMontagemMarmita()
    }, [])

    const { setCarrinho } = useContext(CarrinhoContexto)
    const { tipoMarmita } = useParams()

    const listaProteinasRef = useRef([])
    const listaGuarnicoesRef = useRef([])
    const listaComplementosRef = useRef([])

    const [proteinasMarcadas, setProteinasMarcadas] = useState(0)
    const [guarnicoesMarcadas, setGuarnicoesMarcadas] = useState(0)
    const [complementosMarcados, setComplementosMarcados] = useState(0)

    const hasItems = listaProteinasRef.current.length === 0 || listaGuarnicoesRef.current.length === 0

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
    
    return (
        <>
            <Header />

            <div class="container">
                <div id="marmitacomp_bg">
                    <h1 class="text-center bold pt-5"><strong>Monte sua {template[tipoMarmita].nome}</strong></h1>

                    <div class="row">
                        <div id="marmita_comp" class="col-8">
                            <div class="row">
                                <div class="col-6">
                                    <h2>PROTEÍNAS - Max {template[tipoMarmita].proteinas}</h2>
                                    <form id="proteina">
                                        <ul id="comp_1">
                                            {proteina.map((ingredient) => <MarmitaItem
                                                ingredient={ingredient}
                                                valorNome={(valor, isChecked) => pedidoProteinas(valor, isChecked)}
                                                disabled={proteinasMarcadas >= template[tipoMarmita].proteinas && !listaProteinasRef.current.includes(ingredient.name)}
                                            />)}
                                        </ul>
                                    </form>

                                    <h2>GUARNIÇÕES - Max {template[tipoMarmita].guarnicoes}</h2>
                                    <form id="guarnicao">
                                        <ul id="comp_2">
                                            {guarnicao.map((ingredient) => <MarmitaItem
                                                ingredient={ingredient}
                                                valorNome={(valor, isChecked) => pedidoGuarnicoes(valor, isChecked)}
                                                disabled={guarnicoesMarcadas >= template[tipoMarmita].guarnicoes && !listaGuarnicoesRef.current.includes(ingredient.name)}
                                            />)}
                                        </ul>
                                    </form>
                                </div>

                                <div class="col">
                                    <h2>COMPLEMENTOS - Max {template[tipoMarmita].complementos}</h2>
                                    <form id="complemento">
                                        <ul id="comp_3">
                                            {complemento.map((ingredient) => <MarmitaItem
                                                ingredient={ingredient}
                                                valorNome={(valor, isChecked) => pedidoComplementos(valor, isChecked)}
                                                disabled={complementosMarcados >= template[tipoMarmita].complementos && !listaComplementosRef.current.includes(ingredient.name)}
                                            />)}
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div id="marmita_img" class="row">
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="marmita_buttons">
                        <button id="btn_back">
                            <Link to={'/'}>Voltar</Link>
                        </button>
                        {hasItems &&
                            <button id="btn_finish" onClick={montarMarmita}>
                                    Adicionar ao Carrinho
                            </button>
                        } 
                        {!hasItems &&
                            <button id="btn_finish" onClick={montarMarmita}>
                                <Link to={'/'}>
                                    Adicionar ao Carrinho
                                </Link>
                            </button>
                        }
                    </div>
                </div>
            </div >

        </>
    )
}

export default Marmita