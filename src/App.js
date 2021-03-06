import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainComponentAplication from './components/MainComponentAplication';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Router>
              <Switch>
                <Route path='/' component={MainComponentAplication} /> 
              </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
