function gameStatus(state='pending', action) {
  switch(action.type){
    case 'SET_GAME_STATUS':
      return action.gameStatus
    default:
      return state;
  }
}

export default gameStatus;
