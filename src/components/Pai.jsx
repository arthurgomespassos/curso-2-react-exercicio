import React from 'react';
import { childrenWithFatherProps } from '../utils';
// import Filho from './Filho';

export default (props) => (
  <div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
      {/* <Filho nome="Pedro" sobrenome={sobrenome} />
      <Filho {...{ nome, sobrenome }} />
      <Filho nome="Carla" {...{ nome, sobrenome }} /> */}
      {/* Como faço pra colocar filhos aqui? */}
      {props.children}
      {/* {React.cloneElement(props.children, {
        ...props, ...props.children.props,
      })} */}
      {childrenWithFatherProps(props)}
    </ul>
  </div>
);
