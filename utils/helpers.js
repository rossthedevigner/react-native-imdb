import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const DeviceLayout = {
  width,
  height,
  isSmallDevice: width < 375
};

/**
 * Returns a date in the form of Month Day, Year
 *
 * @param {String} date
 * @param {String} locale
 */
export const formatDateToLocaleString = (date, locale = 'en-US') => {
  const formatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleString(locale, formatOptions);
};

/**
 * Returns the movie based on the unique ID
 *
 * @param {Array} movies
 * @param {Integer} id
 */
export const findMovieByID = (movies = [], id = null) =>
  movies.find((movie) => movie.id === id);
