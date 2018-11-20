import React, { Component } from 'react';

import './App.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Container from './components/Container';
import Podcast from './components/Podcast';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Hero />
      <Container>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          magnam illo minus!Lorem ipsum dolor sit amet consectetur minus!Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          magnam illo minus!Lorem ipsum dolor sit amet consectetur minus!Lorem ipsum dolor sit amet consectetur
        </p>
      </Container>
      <Podcast />

      
      
        
      </div>
    );
  }
}

export default App;
