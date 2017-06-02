function gameStatus(state='pending', action) {
  switch(action.type){
    case 'SET_GAME_STATUS':
      return action.gameStatus;
    case 'UPDATE_GAME':
      return action.game.status;
    default:
      return state;
  }
}

export default gameStatus;
