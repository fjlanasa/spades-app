function game(state=null, action) {
  switch(action.type){
    case 'UPDATE_GAME':
      return action.game.game;
    default:
      return state;
  }
}

export default game;
