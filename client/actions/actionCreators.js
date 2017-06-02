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

export function updateGame(game) {
  return {
    type: 'UPDATE_GAME',
    game
  }
}

export function setId(id) {
  return {
    type: 'SET_ID',
    id
  }
}
