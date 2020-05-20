import axios from "axios";

const TMDB_KEY = "e557d16cc72c12fc2db13727fff4a3ac";
//https://api.themoviedb.org/3/movie/123?api_key=e557d16cc72c12fc2db13727fff4a3ac&language=en-US
const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
        ...params,
        api_key: TMDB_KEY
    }
  });

const getAnything = async(path, params) => {
    try {
        const {data: {results}} = await makeRequest(path, params)
        return [results || data, null]
    } catch (error) {
        console.log(error);
        return [null, error]
    }
}

export const movieApi = {
    nowPlaying: () => getAnything("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming", { region: "kr" }),
    search: query => getAnything("/search/movie", { query }),
    movie: id => getAnything(`/movie/${id}`),
    discover: () => getAnything("/discover/movie")
};

export const tvApi = {
    today: () => getAnything("/tv/airing_today"),
    thisWeek: () => getAnything("/tv/on_the_air"),
    topRated: () => getAnything("/tv/top_rated"),
    popular: () => getAnything("/tv/popular"),
    search: query => getAnything("/search/tv", { query }),
    show: id => getAnything(`/tv/${id}`)
};

export const apiImage = path => `https://image.tmdb.org/t/p/w500${path}`;