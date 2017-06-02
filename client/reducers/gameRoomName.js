function gameRoomName(state=null, action) {
  switch(action.type){
    case 'SET_GAME_INFO':
      return action.form.gameRoomName;
    case 'RESET_GAME_INFO':
      return null;
    default:
      return state;
  }
}

export default gameRoomName;
