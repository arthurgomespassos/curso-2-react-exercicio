/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default (props) => [
  <h1 key="h1">Bom dia {props.nome} {props.idade}!</h1>,
  <h2 key="h2">Até breve</h2>,
];
// usar array é uma outra forma de retormar multiplos elementos, usar o
// key nesse caso dá mais performance pois facilita o react de achar o componente na pagina

// export default (props) => (
//   <>
//     <h1>Bom dia {props.nome} {props.idade}!</h1>
//     <h2>Até breve</h2>
//   </>
//   // <></> é uma abreviação de <React.Fragment></React.Fragment>
// );
