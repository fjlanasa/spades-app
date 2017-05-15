import { combineReducers } from 'redux';
import joinType from './joinType';
import gameRoom from './gameRoom';

const rootReducer = combineReducers({
  joinType,
  gameRoom
});

export default rootReducer;
