import { ADD_FAVORITE, REMOVE_FAVORITE } from './actionTypes';

export const addRemoveFavoriteMovieReducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, payload];
    case REMOVE_FAVORITE:
      return state.filter((movie) => movie.id !== payload.id);
    default:
      return state;
  }
};
