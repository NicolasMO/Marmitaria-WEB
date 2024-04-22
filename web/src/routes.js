import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Marmita from "./pages/Marmita"
import Myprofile from "./pages/Myprofile"

const HomeMemoizado = React.memo(Home)
const MarmitaMemoizado = React.memo(Marmita)
    
const Rotas = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<HomeMemoizado />} />
                    <Route path='/marmita/:tipoMarmita' exact element={<MarmitaMemoizado />} />
                    <Route path='/profile' exact element={<Myprofile />} />
                </Routes>
            </BrowserRouter>
    
    )
}

export default Rotas