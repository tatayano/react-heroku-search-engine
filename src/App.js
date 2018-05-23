import React, { Component } from 'react';

import Button from "./components/Button";
import ButtonRound from "./components/ButtonRound";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      hits: [],
    };
  }

  componentDidMount() { 
    fetch('https://www.icarros.com.br/rest/search/v1/0/makes')
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const {hits} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button>
          <i>teste</i>
        </Button>
        <ButtonRound>
          <p>1</p>
          <p>2</p>
        </ButtonRound>
        {hits.map(hit =>
          <div key={hit.nome}>
            {hit.nome}
          </div>
        )}
      </div>
    );
  }
}

export default App;
