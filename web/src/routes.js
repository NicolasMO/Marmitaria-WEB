import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Marmita from "./pages/Marmita"
import Myprofile from "./pages/Myprofile"

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />}/>
                <Route path='/marmita' exact element={<Marmita />}/>
                <Route path='/profile' exact element={<Myprofile />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas