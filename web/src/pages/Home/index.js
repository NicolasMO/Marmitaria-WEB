import React from "react"

import Header from "../../components/Header"
import MarmitaPick from "../../components/MarmitaPick"
import Drinks from "../../components/Drinks"
import ModalFinish from "../../components/ModalFinish"
import SalesCart from "../../components/SalesCart"

const Home = () => {
    return (
        <>
            <ModalFinish />

            <SalesCart />

            <div>
                <Header />
            </div>

            <div>
                <MarmitaPick />
            </div>

            <div>
                <Drinks />
            </div>

        </>
    )
}

export default Home