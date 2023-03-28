import { combineReducers } from 'redux';
import favorites from "./favoriteReducer";

const rootReducer = combineReducers({
  favorites
});

export default rootReducer;
