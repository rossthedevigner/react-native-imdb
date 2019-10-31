import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import { AppProvider } from './store/AppProvider';

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.appContainer}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppProvider>
          <AppNavigator />
        </AppProvider>
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([]),
    Font.loadAsync({
      'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
      'nunito-extra-bold': require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
      'nunito-light': require('./assets/fonts/NunitoSans-Light.ttf'),
      nunito: require('./assets/fonts/NunitoSans-Regular.ttf'),
      ...Ionicons.font
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
