import React, { Component } from 'react';
import './App.css';
import Desk from './components/board/desk';
import Home from './components/home';
import Header from './components/common/header';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/board" component={Desk}/>
        </Switch>
      </div>
    );
  }
}

export default App;
