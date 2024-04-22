import React from 'react';

const MarmitaItem = ({ ingredient, valorNome, disabled }) => {
  const pegarNome = (event) => {
    const isChecked = event.target.checked; // Verifica se o checkbox está marcado
    valorNome(ingredient.name, isChecked); // Passa o valor do checkbox e se está marcado para a função valorNome
  };

  return (
    <li className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={ingredient.value}
        id={ingredient.value}
        onChange={pegarNome}
        disabled={disabled}
      />

      <label className="form-check-label" htmlFor={ingredient.value}>
        {ingredient.name}
      </label>
    </li>
  );
};

export default MarmitaItem;