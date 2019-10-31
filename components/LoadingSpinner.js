import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import baseColors from '../styles/colors';

export const LoadingSpinner = ({
  style = {},
  size = 'small',
  color = baseColors.blue
}) => (
  <View style={style}>
    <ActivityIndicator size={size} color={color} />
  </View>
);
