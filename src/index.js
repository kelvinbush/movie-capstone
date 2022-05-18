import './style.css';
import searchIcon from './assets/search.svg';
import footerIcon from './assets/light.png';
import getMovies from './modules/movieList.js';
import rating from './assets/rate.png';
import loveIcon from './assets/love.png';
import { getLike, getLikes, postLike } from './modules/likes.js';
import countMovies from './modules/count.js';

const movieCount = document.getElementById('movies-count');

const logo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = footerIcon;
logo.appendChild(myLogo);

const search = document.getElementById('search');
search.src = searchIcon;

const footer = document.getElementById('foot');
const fIcon = new Image();
fIcon.src = footerIcon;
footer.prepend(fIcon);

const listenForLikeClicks = () => {
  const likeBtn = document.querySelectorAll('.like-btn');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const { id } = e.target.dataset;
      const response = await postLike(id);
      if (response.status === 201) {
        e.target.nextElementSibling.innerHTML = Number(e.target.nextElementSibling.innerHTML) + 1;
      }
    });
  });
};

const displayMovies = async () => {
  const movies = await getMovies();
  const likes = await getLikes();
  movieCount.innerHTML = countMovies(movies);
  const moviesSection = document.getElementById('movies');
  moviesSection.innerHTML = movies.map((movie) => `
      <article class="movie">
        <img src="${movie.image.medium}" alt="${movie.name}">
        <h3>${movie.name}</h3>
        <p class="movie__genre">${movie.genres.join(', ')}</p>
        <div>
          <p class="movie__rating"><span><img src="${rating}" alt=""></span>${movie.rating.average}</p>
          <p class="movie__likes">
            <img src="${loveIcon}" alt="" class="like-btn" data-id=${movie.id}>
            <span>${getLike(movie.id, likes)}</span>
          </p>
        </div>
        <button>Comments</button>
      </article>
  `).join('');
  listenForLikeClicks();
};

displayMovies();
