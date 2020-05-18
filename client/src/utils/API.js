import axios from 'axios';
// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = '32a9ec1e57a6839fcf26fa958bca7cf5';

export default {
  // API call for initial tv or movie details -- need to credit
  mediaSearch: function (title) {
    return axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`
    );
  },
  // API call for movie poster, trailers and runtime -- need to credit COMBINED
  trailerSearch: function (id, mediaType) {
    return axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
    );
  },
  // API call for similar movies -- need to credit COMBINED
  // relatedMoviesSearch: function (id) {
  //   return axios.get(
  //     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
  //   );
  // },

  // API call for tv ratings -- need to credit
  ratingSearch: function (id, mediaType) {
    return axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/${
        mediaType === 'tv' ? 'content_ratings' : 'release_dates'
      }?api_key=${apiKey}&language=en-US`
    );
  },

  // API call for similar movies -- need to credit
  relatedSearch: function (id, mediaType) {
    return axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`
    );
  },
  // API call for TV poster, trailers, network and next episode -- need to credit
  tvTrailerSearch: function (id, mediaType) {
    return axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
    );
  },
  // API call for trending tv shows -- need to credit
  trendingSearch: function (mediaType) {
    return axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`
    );
  },

  // API call for celebrity info -- need to credit
  celebSearch: function (userInput) {
    return axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${userInput}&page=1&include_adult=false`
    );
  },

  // API call for additional celebrity details -- need to credit
  celebrityDetailsSearch: function (id) {
    return axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`
    );
  },

  // API call for trending celebrities  -- need to cache every 30 min
  trendingCelebritiesSearch: function () {
    return axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`
    );
  },
};
