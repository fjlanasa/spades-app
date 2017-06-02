function winningScore(state=null, action) {
  switch(action.type){
    case 'SET_GAME_INFO':
      if (action.form.winningScore) {
        return action.form.winningScore
      }
    case 'RESET_GAME_INFO':
      return null;
    default:
      return state;
  }
}

export default winningScore;
