import React, { Component } from 'react';
import './GameScore.css';

class GameScore extends Component {
  render() {
    const { score, winner } = this.props;
    return (
      <div className="game-score-wrapper">
        <h2 className="section-title">
          {winner ? `Winner : ${winner}` : 'Score'}
        </h2>
        <table className="score-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {score.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.round}</td>
                  <td>{this.props[item.winner].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GameScore;
