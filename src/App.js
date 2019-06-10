import React, { Component } from 'react';
import './App.css';
import Feed from './app/FeedPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/feed' component={Feed} />
          <Redirect from='/' to='/feed' />
        </Switch>
      </div>
    );
  }
}

export default App;