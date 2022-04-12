import React from "react";

export default (props) => {
  const { max, min } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <section>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo </strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo</strong>
        {max}
      </p>
      <p>
        <strong>Valor Escolhido</strong> {aleatorio}
      </p>
    </section>
  );
};
