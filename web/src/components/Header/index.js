import React from "react"

const Header = () => {

    return (
        <header id="main_header">
            <div class="container-fluid">
                <a href='/'><img id="logo" class="img-fluid" src={require('../../assets/logoMarmitaHeader.png')}/></a>
                <div id="off_canvas">
                    <p class="canvas_item">
                    <img id="img_header" src={require('../../assets/profile.png')}></img>
                    </p>
                    <p class="canvas_item">
                        <a href='/profile'>Meu Perfil</a>
                    </p>
                    <p class="canvas_item">
                    <a href='/profile'>Meus Pedidos</a>
                    </p>
                    <p class="canvas_item">
                        Sair
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header