import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandRock,
  faHandPaper,
  faHandScissors
} from '@fortawesome/free-solid-svg-icons';
import './Game.css';

export class Game extends Component {
  state = {
    turn: 'player1',
    formValid: false,
    player1: {
      answer: '',
      name: ''
    },
    player2: {
      answer: '',
      name: ''
    }
  };

  componentDidMount() {
    const newState = { ...this.state };
    const { player1, player2 } = this.props;
    newState.player1.name = player1.name;
    newState.player2.name = player2.name;
    this.setState(newState);
  }

  onAnswerSelected = e => {
    const newState = { ...this.state };
    const { turn } = newState;
    const value = e.target.value;
    newState[turn].answer = value;
    this.setState(newState);
    this.validateAnswer(turn);
  };

  validateAnswer = player => {
    const newState = { ...this.state };
    const valid = newState[player].answer !== '';
    this.setState({ formValid: valid });
  };

  render() {
    const { round, player1, player2 } = this.props;
    const { turn } = this.state;
    return (
      <div>
        <h1 className="section-title">Round # {round}</h1>
        <h2 className="panel-text">
          {turn === 'player1' ? player1.name : player2.name}
        </h2>
        <h3 className="panel-text">Select Move:</h3>
        <form className="game-choice-form">
          <div className="check-button-group">
            <label>
              <input
                name="answer"
                type="radio"
                value="rock"
                onChange={e => this.onAnswerSelected(e)}
              />
              <span className="icon-wrapper">
                <FontAwesomeIcon
                  className="fa-4x"
                  style={{ color: '#39e8b0' }}
                  icon={faHandRock}
                />
              </span>
            </label>
          </div>
          <div className="check-button-group">
            <label>
              <input
                name="answer"
                type="radio"
                value="paper"
                onChange={e => this.onAnswerSelected(e)}
              />
              <span className="icon-wrapper">
                <FontAwesomeIcon
                  className="fa-4x"
                  style={{ color: '#39e8b0' }}
                  icon={faHandPaper}
                />
              </span>
            </label>
          </div>
          <div className="check-button-group">
            <label>
              <input
                name="answer"
                type="radio"
                value="scissors"
                onChange={e => this.onAnswerSelected(e)}
              />
              <span className="icon-wrapper">
                <FontAwesomeIcon
                  className="fa-4x"
                  style={{ color: '#39e8b0' }}
                  icon={faHandScissors}
                />
              </span>
            </label>
          </div>
        </form>
        <button
          className="game-button continue-game-button"
          disabled={!this.state.formValid}
          onClick={e => this.submitPlayers(e)}
        >
          Continue
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    round: state.round,
    player1: state.player1,
    player2: state.player2,
    rounds: state.rounds
  };
};

export default connect(mapStateToProps)(Game);
