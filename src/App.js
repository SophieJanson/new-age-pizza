import React, { Component } from 'react';
import './App.css';
import PizzaSelectorContainer from './components/PizzaSelectorContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <PizzaSelectorContainer />
        </main>
      </div>
    );
  }
}

export default App;
