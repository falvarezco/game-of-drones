import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayers } from '../store/actions';
import './PlayerSelection.css';

class PlayerSelection extends Component {
  state = {
    player1: {
      name: '',
      valid: false
    },
    player2: {
      name: '',
      valid: false
    }
  };

  handlePlayerName = e => {
    e.preventDefault();

    const player = e.target.name;
    const value = e.target.value;
    const stateValues = { ...this.state };
    stateValues[player].name = value;

    this.setState(stateValues, this.validateFormFiels(player, value));
  };

  submitPlayers = e => {
    e.preventDefault();
    const { onSubmit, history } = this.props;
    const { player1, player2 } = this.state;
    const players = { player1, player2 };
    onSubmit(players);
    history.push('/game');
  };

  validateFormFiels = (field, value) => {
    const stateValues = { ...this.state };
    stateValues[field].valid = value ? true : false;
    this.setState(stateValues);
  };

  render() {
    const { player1, player2 } = this.state;
    return (
      <div className="player-selection-page">
        <h1 className="section-title">Enter Player's Names</h1>
        <form className="players-form" onSubmit={e => e.preventDefault()}>
          <div className="form-field-wrapper">
            <div className="form-group">
              <label htmlFor="player1">Player 1: </label>
              <input
                className="text-field"
                id="player1"
                name="player1"
                type="text"
                placeholder="Add Player's 1 name"
                onChange={e => this.handlePlayerName(e)}
                value={player1.name}
              />
            </div>
          </div>
          <div className="form-field-wrapper">
            <div className="form-group">
              <label htmlFor="player2">Player 2: </label>
              <input
                className="text-field"
                id="player2"
                name="player2"
                type="text"
                placeholder="Add Player's 2 name"
                onChange={e => this.handlePlayerName(e)}
                value={player2.name}
              />
            </div>
          </div>
          <div className="form-field-wrapper" style={{ paddingTop: '40px' }}>
            <button
              className="game-button"
              disabled={!player1.valid || !player2.valid}
              onClick={e => this.submitPlayers(e)}
            >
              Start
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rounds: state.rounds,
    finished: state.isFinished
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => dispatch(addPlayers(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSelection);
