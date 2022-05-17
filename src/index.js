import './style.css';
import MLogo from './assets/logo-light.png';
import searchIcon from './assets/search.svg';
import footerIcon from './assets/light.png';
import rating from './assets/rate.png';
import loveIcon from './assets/love.png';
import {getMovies} from "./modules/movieList";

const logo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = MLogo;
logo.appendChild(myLogo);

const search = document.getElementById('search');
search.src = searchIcon;

const footer = document.getElementById('foot');
const fIcon = new Image();
fIcon.src = footerIcon;
footer.prepend(fIcon);

const moviesSection = document.getElementById('movies');
moviesSection.innerHTML = getMovies().map(movie => {
  return `
    <article class="movie">
      <img src="${movie.image.medium}" alt="${movie.name}">
      <h3>${movie.name}</h3>
      <p class="movie__genre">${movie.genres.join(', ')}</p>
      <div>
        <p class="movie__rating"><span><img src="${rating}" alt=""></span>${movie.rating.average}</p>
        <p class="movie__likes"><img src="${loveIcon}" alt=""><span>15</span></p>
      </div>
      <button>Comments</button>
    </article>
  `
}).join('');
