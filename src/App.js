import React, { Component } from 'react';
import './App.css';
import PizzaSelectorContainer from './components/PizzaSelectorContainer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <AppBar position="static" color="default" >
            <Toolbar>
              <Typography variant="title" color="secondary" gutterBottom="true">
                New Age Pizza
              </Typography>
            </Toolbar>
          </AppBar>
          <PizzaSelectorContainer />
        </main>
      </div>
    );
  }
}

export default App;
