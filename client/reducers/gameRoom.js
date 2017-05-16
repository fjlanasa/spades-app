function gameRoom(state=null, action) {
  switch(action.type){
    case 'SUBMIT_GAME_FORM':
      return action.form.gameRoomName;
    default:
      return state;
  }
}

export default gameRoom;
