function gameRoom(state=null, action) {
  switch(action.type){
    case 'SET_GAME_ROOM':
      return action.gameRoom;
    default:
      return state;
  }
}

export default gameRoom;
