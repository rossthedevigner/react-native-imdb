import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import Image from 'react-native-scalable-image';
import { formatDateToLocaleString } from '../utils/helpers';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../components/AppText';
import { Score } from '../components/Score';
import { FavoriteButton } from '../components/FavoriteButton';
import { API_POSTER_SIZES, API_POSTER_IMAGE_URL } from '../utils/constants';
import baseColors from '../styles/colors';

const MovieDetailScreen = (props) => {
  const {
    params: {
      id,
      title,
      overview,
      popularity,
      poster_path,
      release_date,
      vote_average
    } = {}
  } = props.navigation.state;

  return (
    <ScrollView
      class="container"
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.movieDetailItem}>
        <Image
          source={{
            uri: `${API_POSTER_IMAGE_URL}${API_POSTER_SIZES[2]}${poster_path}`
          }}
          resizeMode="contain"
          width={parseInt(API_POSTER_SIZES[2].substring(1), 10)}
        />

        <View style={styles.movieDetailsMetaContainer}>
          <View style={styles.movieDetailsIcons}>
            <Score score={vote_average} height={70} width={70} />
            <FavoriteButton movie={{ id, title }} />
          </View>

          <View>
            <AppText
              style={{
                color: baseColors.lightGray
              }}>
              Release Date
            </AppText>
            <AppText style={styles.releaseDateHeader}>
              {formatDateToLocaleString(release_date)}
            </AppText>
          </View>
        </View>
      </View>
      <View style={styles.overviewContainer}>
        <AppText style={styles.overviewParagraph}>{overview}</AppText>
      </View>
    </ScrollView>
  );
};

MovieDetailScreen.navigationOptions = (props) => {
  const {
    goBack,
    state: {
      params: { title }
    }
  } = props.navigation;

  return {
    headerLeft: null,
    headerRight: (
      <TouchableOpacity
        onPress={() => goBack()}
        style={styles.buttonHeaderClose}>
        <Ionicons name="md-close" size={36} color={baseColors.blue} />
      </TouchableOpacity>
    ),
    headerTitleAllowFontScaling: true,
    headerTitle: (
      <View>
        <AppText style={styles.headerTitle}>{title}</AppText>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'nunito-bold',
    lineHeight: 20
  },
  scrollViewContainer: {
    paddingHorizontal: 14,
    paddingTop: 12
  },
  movieDetailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  movieDetailsMetaContainer: {
    flex: 0.88
  },
  movieDetailsIcons: {
    flexDirection: 'row',
    marginLeft: -3,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  buttonHeaderClose: {
    marginRight: 12,
    padding: 4
  },
  releaseDateHeader: {
    fontSize: 17
  },
  overviewContainer: {
    marginTop: 18
  },
  overviewParagraph: {
    fontSize: 18,
    fontFamily: 'nunito-light'
  }
});

export { MovieDetailScreen };
