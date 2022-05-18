import './style.css';
import searchIcon from './assets/search.svg';
import footerIcon from './assets/light.png';
import getMovies from "./modules/movieList";
import rating from "./assets/rate.png";
import loveIcon from "./assets/love.png";
import {getLike, getLikes} from "./modules/likes.js";

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

const displayMovies = async () => {
  const movies = await getMovies();
  const likes = await getLikes();
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
};

displayMovies();
