    import React from 'react'

    const DrinksCard = ({ produto, adicionar }) => {
        const addItem = () => {
            adicionar(produto)
        }

        return (
            <div class="col-4">
                <div class="drink_card d-flex flex-column align-items-center">
                    <img src={require('../../assets/latacoca.jpg')} />
                    <h3>{produto.name} - R$ {produto.price.toFixed(2)}</h3>
                    <p class="drink_text">
                        {produto.desc}
                    </p>
                    <button class="btn_add_drink" value="0" onClick={addItem} >
                        adicionar
                    </button>
                </div>
            </div>
        )
    }

    export default DrinksCard