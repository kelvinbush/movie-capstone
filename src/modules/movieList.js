const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data.slice(0, 30);
};

export default getMovies;
