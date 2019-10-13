import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandRock,
  faHandPaper,
  faHandScissors
} from '@fortawesome/free-solid-svg-icons';
import './Game.css';
import checkRoundWinner from '../store/actions/checkRoundWinner';

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
    },
    selectedValues: {
      rock: false,
      paper: false,
      scissors: false
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

    Object.keys(newState.selectedValues).forEach(key => {
      newState.selectedValues[key] = key === value ? true : false;
    });

    newState[turn].answer = value;
    this.setState(newState);
    this.validateAnswer(turn);
  };

  validateAnswer = player => {
    const newState = { ...this.state };
    const valid = newState[player].answer !== '';
    this.setState({ formValid: valid });
  };

  continueGame = e => {
    e.preventDefault();
    const newState = { ...this.state };
    const { checkWinner } = this.props;
    newState.turn = newState.turn === 'player1' ? 'player2' : 'player1';
    newState.formValid = false;
    Object.keys(newState.selectedValues).forEach(key => {
      newState.selectedValues[key] = false;
    });

    // checkear si ya hay dos resultados--> Si hay comparar y dar con un ganador y
    // settear todo para el round 2, Sino continuar hasta que sean diferentes
    if (
      newState.player1.answer &&
      newState.player2.answer !== '' &&
      newState.player1.answer !== newState.player2.answer
    ) {
      // dispatch action
      checkWinner(newState);
      this.resetForNextRound();
    } else {
      this.setState(newState);
    }
  };

  resetForNextRound = () => {
    const resettedState = {
      turn: 'player1',
      player1: {
        answer: ''
      },
      player2: {
        answer: ''
      },
      selectedValues: {
        rock: false,
        paper: false,
        scissors: false
      }
    };
    this.setState(resettedState);
  };

  render() {
    const { round, player1, player2 } = this.props;
    const { turn, formValid, selectedValues } = this.state;
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
                checked={selectedValues.rock}
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
                checked={selectedValues.paper}
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
                checked={selectedValues.scissors}
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
          disabled={!formValid}
          onClick={e => this.continueGame(e)}
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

const mapDispatchToProps = dispatch => {
  return {
    checkWinner: values => dispatch(checkRoundWinner(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
