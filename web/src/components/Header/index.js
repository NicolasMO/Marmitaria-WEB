import React, { useContext, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

const Header = () => {
    
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    
    const login = async () => {
        try {
            const response = await api.post("/users/login", credentials);
            const res = response.data;
            if (res.error) {
                alert(res.message);
                return false;
            }
             localStorage.setItem("@user", JSON.stringify(res.usuario));
             window.location.reload();
            } catch (err) {
                alert(err.message);
            }
        }

    const logado = localStorage.getItem("@user");

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    
    return (
        <header id="main_header">
            <div class="container-fluid">
                <a href="/">
                    <img
                        id="logo"
                        class="img-fluid"
                        src={require("../../assets/logoMarmitaHeader.png")}
                    />
                </a>
                <div id="off_canvas">
                    {!logado && (
                        <>
                            <input
                                type="email"
                                class="form_login"
                                placeholder="Digite seu e-mail"
                                value={credentials.email}
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        email: e.target.value
                                    })
                                }
                            />
                            <br />

                            <input
                                type="password"
                                class="form_login"
                                placeholder="Digite sua Senha"
                                value={credentials.senha}
                                onChange={(e) =>
                                    setCredentials({
                                        ...credentials,
                                        password: e.target.value
                                    })
                                }
                            />
                            <br />

                            <button
                                id="btn_login"
                                class="btn" 
                                onClick={login}
                            >
                                Entrar
                            </button>

                            <p>Não tem conta? <Link to="/register">Cadastre-se</Link></p>
                        </>
                    )}
                    {logado && (
                        <>
                            <p class="canvas_item">
                                <img
                                    id="img_header"
                                    src={require("../../assets/profile.png")}
                                />
                            </p>
                            <p class="canvas_item">
                                <a href="/profile">Meu Perfil</a>
                            </p>
                            <p class="canvas_item">
                                <a href="/profile">Meus Pedidos</a>
                            </p>
                            <p class="canvas_item" onClick={logout}><a href="/">Sair</a></p>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
