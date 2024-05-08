import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/Header"
import MarmitaItem from "../../components/MarmitaItem"

import useMarmita from "../../hooks/useMarmita.ts"

const Marmita = () => {

    const { getItems, proteina, guarnicao, complemento, iniciarMontagemMarmita, tipoMarmita, 
            listaProteinasRef, listaGuarnicoesRef, listaComplementosRef, hasItems,
            proteinasMarcadas, guarnicoesMarcadas, complementosMarcados, 
            pedidoProteinas, pedidoGuarnicoes, pedidoComplementos, montarMarmita, template} = useMarmita()

    
    useEffect(() => {
        getItems()
        iniciarMontagemMarmita()
    }, [])
    
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