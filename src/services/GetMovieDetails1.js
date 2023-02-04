export const GetMovieDetails1 = (url) => {
  return fetch(url).then((response) => response.json());
};
