import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useAppContext } from '../store/AppProvider';
import { LoadingSpinner } from '../components/LoadingSpinner';

import { DEFAULT_QUERY_PARAMS } from '../utils/constants';

export const SplashScreen = (props) => {
  const { replace } = props.navigation;
  const { appReady, getPopularMoviesData } = useAppContext();

  useEffect(() => {
    const requestMovies = async () => {
      return await getPopularMoviesData(DEFAULT_QUERY_PARAMS);
    };
    requestMovies();
  }, []);

  useEffect(() => {
    if (appReady) {
      replace('MovieListScreen');
    }
  }, [appReady]);

  return (
    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
      <LoadingSpinner size={'large'} />
    </View>
  );
};
