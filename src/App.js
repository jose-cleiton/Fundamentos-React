import React from "react";
import "./index.css";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Card from "./components/layout/Card";

export default () => (
  <div>
    <h1>Fundamentos React</h1>
    <Card titulo="Desafio Aleatório">
      <Aleatorio min={1} max={60} />
    </Card>

    <Primeiro />
    <ComParametro titulo="Segundo componente" subtitulo="Deu certo!" />
  </div>
);
