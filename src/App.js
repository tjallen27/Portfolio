import React, { Component } from 'react';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Links from './Components/Links';
import Skills from './Components/Skills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Links />
        <Skills />
      </div>
    );
  }
}

export default App;
