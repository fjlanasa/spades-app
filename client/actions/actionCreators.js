export function setJoinType(joinType) {
  return {
    type: 'SET_JOIN_TYPE',
    joinType
  }
}

export function setGameRoom(gameRoom) {
  return {
    type: 'SET_GAME_ROOM',
    gameRoom
  }
}
