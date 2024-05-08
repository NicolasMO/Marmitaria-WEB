import React, { useEffect, useState } from "react"
import Header from "../../components/Header"
import RequestInfo from "../../components/RequestInfo"
import api from '../../services/api'


const formatarTelefone = (number) => {
    
    const numeroString = number.toString()
    
    
    const telefoneFormatado = numeroString.replace(
        /(\d{2})(\d{5})(\d{4})/,
        "($1) $2-$3"
        )
        return telefoneFormatado
    }
    
    const Myprofile = ({ usuario }) => {
        const enderecos = usuario.address
        
        const [ pedidos, setPedidos ] = useState([])
        const listaPedidos = async () => {
            try {
                const response = await api.get('/users/requests/list', {
                    params: {
                        userId: usuario._id
                    }
                })
                const res = response.data
                if (res.error) {
                    alert(res.message)
                    return false
                }
                setPedidos(res)
            } catch (err) {
                alert(err.message)
            }
        } 
        useEffect(() => {
            listaPedidos()
        },[])  
    return (
        <>
            <Header />

            <div class='container'>
                <div id="profile_bg">
                    <div class="profile_data d-flex flex-row">
                        <div id="profile_image">
                            <img src={require('../../assets/profile.png')}></img>
                        </div>

                        <div class="profile_infos d-flex">
                            <div>
                                <div id="profile_header_name" class="profile_info_header">Nome</div>
                                <label class="profile_info">{usuario.name}</label>
                                <br />
                                <div id="profile_header_number" class="profile_info_header">Telefone</div>
                                <label class="profile_info">{formatarTelefone(usuario.number)}</label>
                            </div>

                            <div id="profile_address_field">
                                <div id="profile_header_address" class="profile_info_header">Endereço p/ entrega</div>
                                {enderecos.map((endereco) => {
                                   return (
                                    <span>
                                        <label class="profile_info">{endereco}</label> 
                                        <img src={require('../../assets/pencil-fill.png')} /> 
                                        <img src={require('../../assets/trash-fill.png')} />
                                    </span>
                                   )
                                })}
                            </div>
                        </div>
                    </div>

                    <div class="profile_req">
                        <span>Meus pedidos</span>

                        <div id="profile_req_field">
                            <ul class="profile_req_list">
                                {pedidos.map((pedido) => <RequestInfo pedidoInfo={pedido}/>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Myprofile