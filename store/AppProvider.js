import React, { useState, useContext, createContext, useReducer } from 'react';
import { getPopularMovies } from '../api/api';
import { addRemoveFavoriteMovieReducer } from './reducers';

const AppContext = createContext();

const favoriteMovieState = [];

function AppProvider(props) {
  const [popularMovies, setPopularMovies] = useState({ popularMovies: [] });
  const [appReady, setAppReady] = useState(false);

  const [favoriteMovies, dispatchFavoriteMovie] = useReducer(
    addRemoveFavoriteMovieReducer,
    (initialState = favoriteMovieState)
  );

  async function getPopularMoviesData(queryParams) {
    try {
      const results = await getPopularMovies(queryParams);
      setPopularMovies(results);
      return setAppReady(true);
    } catch (err) {
      const { response } = err;
      console.warn(response.data);
      return setAppReady(response.data);
    }
  }

  return (
    <AppContext.Provider
      value={{
        popularMovies,
        getPopularMoviesData,
        favoriteMovies,
        appReady,
        dispatchFavoriteMovie
      }}
      {...props}
    />
  );
}

function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useAppContext must be used with an AppProvider`);
  }
  return context;
}

export { AppProvider, useAppContext };
