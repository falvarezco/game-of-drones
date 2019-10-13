import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GameResults.css';

class GameResults extends Component {
  render() {
    return (
      <div className="game-results-wrapper">
        <h1 className="section-title">We Have a Winner!!</h1>
        <h1 className="section-title">Player1 is the new EMPEROR!</h1>
        <Link to="/">
          <button className="game-button continue-game-button">
            Play Again
          </button>
        </Link>
      </div>
    );
  }
}

export default GameResults;
