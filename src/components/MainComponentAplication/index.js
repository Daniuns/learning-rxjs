import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Switch, Route } from 'react-router-dom';
import BarOperators from '../BarOperators/index';
import  FilterOperator  from '../MyOperators/FilterOperator/index';
import  ThrottleTimeOperator  from '../MyOperators/ThrottleTimeOperator/index';

import './mainComponentAplicationTheme.css';
import Welcome from '../Welcome/index';

class MainComponentAplication extends Component {

  render() {
    return (
      <div className="App">
       <AppBar position="absolute" className={''}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            RxJS
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='operators-content'>
        <BarOperators />
        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={Welcome} /> 
            <Route path='/filter' component={FilterOperator} />
            <Route path='/ThrottleTime' component={ThrottleTimeOperator} /> 
          </Switch>
        </div>
      </div>
      </div>
    );
  }
}

export default MainComponentAplication;
