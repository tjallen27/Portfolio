import React, { Component } from 'react';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Links from './Components/Links';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p class="intro">Made with <i class="fab fa-react"></i></p>
        <Header />
        <Projects />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;