import { combineReducers } from 'redux';
import joinType from './joinType';
import gameRoom from './gameRoom';
import playerName from './playerName';
import winningScore from './winningScore';
import gameStatus from './gameStatus';
import game from './game';
import id from './id';

const rootReducer = combineReducers({
  joinType,
  gameRoom,
  playerName,
  winningScore,
  gameStatus,
  game,
  id
});

export default rootReducer;
