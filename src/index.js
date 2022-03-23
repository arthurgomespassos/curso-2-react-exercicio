import React from 'react';
import ReactDOM from 'react-dom';

import BomDia from './components/BomDia';
import Mult, { BoaTarde } from './components/Multiplos';
// const elemento = <h1>React 2</h1>;

import Saudacao from './components/Saudacao';

ReactDOM.render(
  <>
    <BomDia nome="Arthur" idade="19" />
    <BoaTarde nome="Thusco" />
    <Mult.BoaNoite nome="Gudula" />
    <Saudacao tipo="Eu sou um tipo" nome="Arthur" />
  </>,
  document.getElementById('root'),
);
