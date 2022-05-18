import './style.css';
import searchIcon from './assets/search.svg';
import footerIcon from './assets/light.png';
import rating from './assets/rate.png';
import loveIcon from './assets/love.png';
import getMovies from './modules/movieList.js';
import { createModal, popup } from './modules/modal.js';

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

const moviesSection = document.getElementById('movies');
moviesSection.innerHTML = getMovies.map((movie) => `
    <article class="movie">
      <img src="${movie.image.medium}" alt="${movie.name}">
      <h3>${movie.name}</h3>
      <p class="movie__genre">${movie.genres.join(', ')}</p>
      <div>
        <p class="movie__rating"><span><img src="${rating}" alt=""></span>${movie.rating.average}</p>
        <p class="movie__likes"><img src="${loveIcon}" alt=""><span>15</span></p>
      </div>
      <button type="button" class="movie-btn" data-id="${movie.id}">Comments</button>
    </article>
  `).join('');

moviesSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('movie-btn')) {
    createModal(e.target.dataset.id);
    popup.removeAttribute('class');
    popup.classList.add('modal-cross');
    const cross = document.querySelector('.cross');
    cross.addEventListener('click', () => {
      popup.removeAttribute('class');
      popup.classList.add('none');
    });
  }
});
