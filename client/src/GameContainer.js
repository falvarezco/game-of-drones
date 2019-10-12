import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PlayerSelection from './components/PlayerSelection';
import Game from './components/Game';
import GameResults from './components/GameResults';
import GameStatistics from './components/GameStatistics';

export class GameContainer extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={PlayerSelection} />
            <Route path="/game" component={Game} />
            <Route path="/game-results" component={GameResults} />
            <Route path="/game-stats" component={GameStatistics} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default GameContainer;
