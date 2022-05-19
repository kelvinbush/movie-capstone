import './style.css';
import searchIcon from './assets/search.svg';
import footerIcon from './assets/light.png';
import getMovies from './modules/movieList.js';
import rating from './assets/rate.png';
import loveIcon from './assets/love.png';
import { getLike, getLikes, postLike } from './modules/likes.js';
import countMovies from './modules/count-movies.js';
import { createModal, popup, displayComments } from './modules/modal.js';
import { postComment } from './modules/comment.js';

const movieCount = document.getElementById('movies-count');

const logo = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = footerIcon;
logo.appendChild(myLogo);

const search = document.getElementById('search');
const searchIconImg = new Image();
searchIconImg.src = searchIcon;
search.prepend(searchIconImg);

const footer = document.getElementById('foot');
const fIcon = new Image();
fIcon.src = footerIcon;
footer.prepend(fIcon);

const addComment = async () => {
  const form = document.getElementById('post-comment');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const record = {
      item_id: event.target.dataset.id,
      username: formData.get('username'),
      comment: formData.get('comment'),
    };
    await postComment(record);
    await displayComments();
  });
};

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
const moviesSection = document.getElementById('movies');

const displayMovies = async () => {
  const movies = await getMovies();
  const likes = await getLikes();
  movieCount.innerHTML = countMovies(movies);
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
         <button type="button" class="movie-btn" data-id="${movie.id}">Comments</button>
      </article>
  `).join('');

  moviesSection.addEventListener('click', async (e) => {
    if (e.target.classList.contains('movie-btn')) {
      await createModal(movies, e.target.dataset.id);
      await displayComments();
      await addComment();
      popup.removeAttribute('class');
      popup.classList.add('modal-cross');
      const cross = document.querySelector('.cross');
      cross.addEventListener('click', () => {
        popup.removeAttribute('class');
        popup.classList.add('none');
      });
    }
  });
  listenForLikeClicks();
};

displayMovies();
