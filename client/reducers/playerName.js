function playerName(state=null, action) {
  switch(action.type){
    case 'SUBMIT_GAME_FORM':
      return action.form.playerName
    default:
      return state;
  }
}

export default playerName;
