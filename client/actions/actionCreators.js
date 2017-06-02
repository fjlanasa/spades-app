export function setJoinType(joinType) {
  return {
    type: 'SET_JOIN_TYPE',
    joinType
  }
};

export function setGameInfo(form) {
  return {
    type: 'SET_GAME_INFO',
    form
  }
};

export function resetGameInfo() {
  return {
    type: 'RESET_GAME_INFO'
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
