import React, { useCallback } from 'react';
import { TouchableHighlight } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../store/actionTypes';
import { findMovieByID } from '../utils/helpers';
import { useAppContext } from '../store/AppProvider';

import baseColors from '../styles/colors';

const FavoriteButton = ({ movie }) => {
  const { id, title } = movie;
  const { favoriteMovies, dispatchFavoriteMovie } = useAppContext();
  const isFavorite = findMovieByID(favoriteMovies, id);

  return (
    <TouchableHighlight
      underlayColor={'#ffffff'}
      onPress={useCallback(() =>
        dispatchFavoriteMovie({
          type: isFavorite ? REMOVE_FAVORITE : ADD_FAVORITE,
          payload: { id, title }
        })
      )}>
      <Ionicons
        name={`${isFavorite ? 'md-star' : 'md-star-outline'}`}
        size={80}
        color={baseColors.favoriteColor}
        style={{ marginTop: -8 }}
      />
    </TouchableHighlight>
  );
};

export { FavoriteButton };
