import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlayerSelection from './components/PlayerSelection';
import Game from './components/Game';
import GameResults from './components/GameResults';
import GameStatistics from './components/GameStatistics';

import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="game-wrapper">
          <Router>
            <Switch>
              <Route path="/" exact component={PlayerSelection} />
              <Route path="/game" component={Game} />
              <Route path="/game-results" component={GameResults} />
              <Route path="/game-stats" component={GameStatistics} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
