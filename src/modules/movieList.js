const getMovies = async () => {
  try {
    const response = await fetch(`https://api.tvmaze.com/shows`);
    const data = await response.json();
    return data.slice(0, 30)
  } catch (error) {
    console.log(error);
  }
}

export default getMovies;
