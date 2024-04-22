import React, { createContext, useState } from 'react';

// Criar um contexto
const CarrinhoContexto = createContext();

// Componente de provedor do contexto
const CarrinhoContextoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState({});

  return (
    <CarrinhoContexto.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </CarrinhoContexto.Provider>
  );
};

export { CarrinhoContexto, CarrinhoContextoProvider };