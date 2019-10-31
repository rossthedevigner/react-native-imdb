import React from 'react';
import { Text } from 'react-native';

const defaultText = {
  fontFamily: 'nunito',
  fontSize: 16,
  fontWeight: '400'
};

export const AppText = ({ style, ...props }) => (
  <Text {...props} style={[defaultText, style]} />
);
