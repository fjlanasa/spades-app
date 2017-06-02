import React, { Component } from 'react';
import { render } from 'react-dom';

function WaitingForPlayersStage(props) {
  let players;
  if (props.game) {
    players = props.game.players.map((player, index) => {
      return (
        <li key={`${index}`}>{player.name}</li>
      );
    });
  }

  return (
    <div>
      <h1>{props.gameRoom}</h1>
      <ul>
        {
          players
        }
      </ul>
    </div>
  );
}

export default WaitingForPlayersStage;
