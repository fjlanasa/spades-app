function winningScore(state=null, action) {
  switch(action.type){
    case 'SUBMIT_GAME_FORM':
      if (action.form.gameWinningScore) {
        return action.form.gameWinningScore
      }
    default:
      return state;
  }
}

export default winningScore;
