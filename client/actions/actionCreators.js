export function setJoinType(joinType) {
  return {
    type: 'SET_JOIN_TYPE',
    joinType
  }
};

export function submitGameForm(form) {
  return {
    type: 'SUBMIT_GAME_FORM',
    form
  }
};

export function setGameStatus(status) {
  return {
    type: 'SET_GAME_STATUS',
    status
  }
};
