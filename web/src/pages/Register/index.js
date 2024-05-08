import React from "react"
import RegisterField from "../../components/RegisterField"

const Register = () => {
    return (
        <>
            <header id="main_header">
                <div class="container-fluid">
                    <a href="/">
                        <img
                            id="logo"
                            class="img-fluid"
                            src={require("../../assets/logoMarmitaHeader.png")}
                        />
                    </a>
                </div>
            </header>

            <RegisterField />
        </>
    )
}

export default Register