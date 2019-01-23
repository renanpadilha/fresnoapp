import { combineReducers } from 'redux';
import albums from './albums/reducer';

const fresnoApp = combineReducers({
  albums
});

export default fresnoApp