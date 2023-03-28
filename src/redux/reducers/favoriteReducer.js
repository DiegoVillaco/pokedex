import { ADD_FAVORITE, DELETE_FAVORITE, SHOW_FAVORITE } from '../../types';

export default function favoriteReducer(state = [], action) {

  switch (action.type) {

    case ADD_FAVORITE:
      console.log("favoriteReducer.ADDFAVORITE", action.favorite)
      let myUpdatedState = [...state, action.favorite]
      console.log(myUpdatedState);
      state = myUpdatedState;
      return state;
    case DELETE_FAVORITE:
      
      console.log("state", state);
      console.log("action", action);

      let copyState = [...state];
      const filteredState = copyState.filter((data) => data.id !== action.favorite);
      state=filteredState;

      return state;
      


    default:

      return state;
  }
}
