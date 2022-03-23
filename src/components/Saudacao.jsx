import React, { Component } from 'react';

export default class Saudacao extends Component {
  state = {
    tipo: 'Fala',
    nome: 'Pedro',
    idade: '19',
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   tipo: 'Fala',
    //   nome: 'Pedro',
    //   idade: '19',
    // };

    this.setTipo = this.setTipo.bind(this);
  }
  // em react a unica forma de alterar os dados de um componente é alterar o state
  // assim que o state for alterado com set state, os componente será atualizado com os novos dados

  setTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  setIdade = (e) => {
    this.setState({ idade: e.target.value });
  };

  render() {
    const { tipo, nome, idade } = this.state;
    return (
      <div>
        <h1>{tipo} {nome}</h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
        <input type="text" placeholder="Nome..." value={nome} onChange={(e) => this.setNome(e)} />
        <input type="text" placeholder="Idade..." value={idade} onChange={this.setIdade} />
      </div>
    );
  }
}
