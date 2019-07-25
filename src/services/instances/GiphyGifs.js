import axios from 'axios';

const GiphyGifsInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/',
});

export default GiphyGifsInstance;
