function id(state='', action) {
  switch(action.type){
    case 'SET_ID':
      return action.id;
    default:
      return state;
  }
}

export default id;
