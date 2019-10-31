import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { MovieListScreen } from '../screens/MovieListScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { SplashScreen } from '../screens/SplashScreen';

import baseColors from '../styles/colors';

const MovieRoutes = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    },
    MovieListScreen: {
      screen: MovieListScreen,
      navigationOptions: {
        title: 'Movies'
      }
    },
    MovieDetailScreen: {
      screen: MovieDetailScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff',
        height: 48
      },
      headerTintColor: baseColors.headerTintColor
    },
    initialRouteName: 'SplashScreen'
  }
);

export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      MovieRoutes
    },
    {
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      )
    }
  )
);
