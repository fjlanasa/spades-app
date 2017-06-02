import React, { Component } from 'react';
import { render } from 'react-dom';

function SetTeamsStage(props) {
  if (props.id === props.game._owner.sessionId) {
    return (
      <div>
        Set Teams!
      </div>
    );
  } else {
    return (
      <div>
        Teams are being set!
      </div>
    )
  }
}

export default SetTeamsStage;
