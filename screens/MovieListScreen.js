import * as WebBrowser from 'expo-web-browser';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableHighlight, FlatList, View } from 'react-native';

import Image from 'react-native-scalable-image';
import { DeviceLayout } from '../utils/helpers';
import { Score } from '../components/Score';
import { AppText } from '../components/AppText';
import { Error } from '../components/Error';
import baseColors from '../styles/colors';

import { useAppContext } from '../store/AppProvider';
import { formatDateToLocaleString } from '../utils/helpers';
import { API_POSTER_IMAGE_URL, API_POSTER_SIZES } from '../utils/constants';

const MovieDetailsItemSeparator = () => (
  <View style={styles.listViewSeparator} />
);

const MovieDetailsItem = ({ item, navigation: { navigate } }) => {
  return (
    <TouchableHighlight
      underlayColor={baseColors.lighterGray}
      onPress={() => navigate('MovieDetailScreen', item)}
      style={styles.movieItemContainer}>
      <>
        <View>
          <AppText style={styles.movieItemTitle}>{item.title}</AppText>
        </View>
        <View style={styles.movieItem}>
          <Image
            source={{
              uri: `${API_POSTER_IMAGE_URL}${API_POSTER_SIZES[1]}${
                item.poster_path
              }`
            }}
            width={DeviceLayout.width * 0.32}
          />
          <View style={styles.movieItemDetails}>
            <AppText style={styles.releaseDateHeader}>Release Date</AppText>
            <AppText style={styles.releaseDate}>
              {formatDateToLocaleString(item.release_date)}
            </AppText>
            <TouchableHighlight
              onPress={() => navigate('MovieDetailScreen', item)}
              underlayColor={'#ffffff'}>
              <View style={styles.buttonDetails}>
                <AppText style={styles.buttonDetailsText}>Details</AppText>
              </View>
            </TouchableHighlight>
          </View>
          <View className="movie-score">
            <Score score={item.vote_average} />
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
};

const MovieListScreen = (props) => {
  const {
    popularMovies: { results = [] }
  } = useAppContext();

  return (
    <View style={styles.listView}>
      {results.length ? (
        <FlatList
          data={results}
          renderItem={({ item }) => <MovieDetailsItem item={item} {...props} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
          ItemSeparatorComponent={MovieDetailsItemSeparator}
        />
      ) : (
        <Error />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  font20: {
    fontSize: 20
  },
  listView: {
    justifyContent: 'flex-start',
    flex: 1
  },
  flatList: {
    paddingHorizontal: 14
  },
  movieItemTitle: {
    fontSize: 22,
    fontFamily: 'nunito',
    paddingVertical: 10,
    color: baseColors.titleColor
  },
  movieItemContainer: {
    paddingTop: 10,
    paddingBottom: 14
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  movieItemDetails: {
    alignItems: 'stretch',
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'space-between'
  },
  releaseDateHeader: {
    color: baseColors.lightGray
  },
  releaseDate: {
    fontSize: 17
  },
  buttonDetails: {
    marginTop: 20,
    borderRadius: 4,
    paddingVertical: 8,
    backgroundColor: baseColors.darkGray,
    color: baseColors.titleColor,
    alignItems: 'center'
  },
  buttonDetailsText: {
    fontSize: 18,
    textAlign: 'center'
  },
  listViewSeparator: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: baseColors.lighterGray
  }
});

export { MovieListScreen };
