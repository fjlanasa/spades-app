import { combineReducers } from 'redux';
import joinType from './joinType';
import gameRoomName from './gameRoomName';
import playerName from './playerName';
import winningScore from './winningScore';
import gameStatus from './gameStatus';
import game from './game';
import id from './id';

const rootReducer = combineReducers({
  joinType,
  gameRoomName,
  playerName,
  winningScore,
  gameStatus,
  game,
  id
});

export default rootReducer;
