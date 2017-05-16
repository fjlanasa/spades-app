import { combineReducers } from 'redux';
import joinType from './joinType';
import gameRoom from './gameRoom';
import playerName from './playerName';
import winningScore from './winningScore';
import gameStatus from './gameStatus';

const rootReducer = combineReducers({
  joinType,
  gameRoom,
  playerName,
  winningScore,
  gameStatus
});

export default rootReducer;
