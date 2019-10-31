import { API_URL, API_KEY } from '../utils/constants';
import axios from 'axios';

export async function getPopularMovies(queryParams = {}) {
  const { data } = await axios({
    baseURL: `${API_URL}${API_KEY}`,
    params: queryParams
  });

  return data;
}
