import GiphyGifsInstance from "../instances/GiphyGifs";

const GiphyTrendingGifsRequest = {
  url: 'trending',
  method: 'get',
  params: {
    api_key: "Ul4EVa45F0w4FY0sLNWDi8h0xOzMUq8o",
    limit: 20,
  },
  instance: GiphyGifsInstance
};

export default GiphyTrendingGifsRequest;
