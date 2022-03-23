import React from 'react';
import Filho from './Filho';

export default ({ nome, sobrenome }) => (
  <div>
    <h1>{nome} {sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
      <Filho nome="Pedro" sobrenome={sobrenome} />
      <Filho {...{ nome, sobrenome }} />
      <Filho nome="Carla" {...{ nome, sobrenome }} />
    </ul>
  </div>
);
