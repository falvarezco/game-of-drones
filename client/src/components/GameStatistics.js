import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchGameHistory from '../store/actions/fetchGameHistory';
import GameScore from './GameScore';
import './GameStatistics.css';

export class GameStatistics extends Component {
  componentDidMount() {
    const { fetchHistory } = this.props;
    fetchHistory();
  }

  render() {
    const { stats } = this.props;
    return (
      <div>
        <h1 className="section-title">Game Statistics</h1>
        <div className="result-box-container">
          {stats.map((game, key) => {
            return (
              <GameScore
                score={game.rounds}
                player1={game.player1}
                player2={game.player2}
                winner={game.winner}
              />
            );
          })}
        </div>
        <Link to="/">
          <button className="game-button continue-game-button">
            Play Again
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stats: state.gameHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistory: () => dispatch(fetchGameHistory())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatistics);
