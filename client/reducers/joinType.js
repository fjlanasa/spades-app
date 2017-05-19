function joinType(state='new-game', action) {
  switch(action.type){
    case 'SET_JOIN_TYPE':
      return action.joinType
    default:
      return state;
  }
}

export default joinType;
