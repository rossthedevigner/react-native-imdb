import React from 'react';
import { View } from 'react-native';
import { AppText } from '../components/AppText';

export const Error = (props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <AppText style={{ fontSize: 20 }}>
      Sorry, we couldn't find any results!
    </AppText>
  </View>
);
