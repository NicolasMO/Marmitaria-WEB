import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import InputMask from "react-input-mask"
import api from "../../services/api"

const RegisterField = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        number: 0,
        address: ""
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'number') {
            const formattedNumber = value.replace(/\D/g, '')
            setFormData({ ...formData, [id]: formattedNumber })
        } else {
            setFormData({ ...formData, [id]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password || !formData.number || !formData.address) {
            alert("Por favor, preencha todos os campos antes de enviar o formulário.");
            return;
        }
        try {
            const response = await api.post("/users/register", formData);
            alert("Usuário cadastrado com sucesso!")
            navigate('/')
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
        }
    }


    return (
        <div class="container d-flex justify-content-center">
            <div class="register_field">
                <h3 class="text-center pt-5 ">Faça seu cadastro</h3>

                <form class="register_form" onSubmit={handleSubmit}>
                    <div class="row text-center">
                        <label for="name" class="formText">Nome</label>
                        <input id="name" class="formInput" type="text" onChange={handleChange}/>
                    
                        <label for="password" class="formText">Senha</label>
                        <input id="password" class="formInput" type="password" onChange={handleChange}/>
                    
                        <label for="email" class="formText">Email</label>
                        <input id="email" class="formInput" type="email" onChange={handleChange}/>
                    
                        <label for="number" class="formText">Telefone</label>
                        <InputMask 
                            id="number" 
                            className="formInput" 
                            type="tel" 
                            mask="(99) 99999-9999" 
                            maskChar={null}
                            placeholder="Apenas números"
                            onChange={handleChange}
                        />
                    
                        <label for="address" class="formText">Endereço</label>
                        <input id="address" class="formInput" type="text" placeholder="Rua X, N 0" onChange={handleChange}/>
                    </div>
                    
                    <div class="btnsRegister">
                    <button class="btnRegisterBack"><a href="/">Voltar</a></button>
                    <button type="submit" class="btnRegisterSubmit"><span>Criar</span></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterField