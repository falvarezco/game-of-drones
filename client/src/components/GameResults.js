import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './GameResults.css';

const GameResults = ({ winner }) => {
  return (
    <div className="game-results-wrapper">
      <h1 className="section-title">We Have a Winner!!</h1>
      <h1 className="section-title">{winner} is the new EMPEROR!</h1>
      <Link to="/game-stats" className="section-title">
        <h4 className="section-title">See Game History Winners!</h4>
      </Link>
      <Link to="/">
        <button className="game-button continue-game-button">Play Again</button>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    winner: state.winner
  };
};

export default connect(mapStateToProps)(GameResults);
