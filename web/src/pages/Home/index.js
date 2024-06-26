import React from "react"

import Header from "../../components/Header"
import MarmitaPick from "../../components/MarmitaPick"
import Drinks from "../../components/Drinks"
import ModalFinish from "../../components/ModalFinish"
import SalesCart from "../../components/SalesCart"


const Home = ({ usuario }) => {
    
    return (
        <>
            <Header />

            <MarmitaPick />

            <Drinks />

            <ModalFinish usuario={usuario}/>
            
            <SalesCart usuario={usuario}/>
        </>
    )
}

export default Home