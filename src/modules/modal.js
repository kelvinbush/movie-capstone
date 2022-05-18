import { getComments } from './comment.js';

const popup = document.getElementById('modal');

const createModal = async (movies, id) => {
  const data = movies.find((movie) => +movie.id === +id);
  popup.innerHTML = `
  <div class='modal-container'>
  <i class="fa-solid fa-xmark cross"></i>
    <div class="content">
        <img class="modal-pic" src="${data.image.medium}" alt="${data.name}">
        <div class="description">
            <h3>${data.name}</</h3>
            <p class="genre">${data.genres.join(', ')}</p>
            <p class="release-date">February 8, 2015</p>
        </div>
    </div>
    <div class="middle-section">
        <div class="comment-input">
            <i class="fa-solid fa-circle-user user-icon fa-2x"></i>
            <form class="inputs" id="post-comment" data-id=${data.id}>
                <input type="text" id="username" name="username" required minlength="4" maxlength="8" size="10">
                <textarea id="comment" name="comment" rows="2" cols="15"></textarea>
                <input id = "add-comment" type="submit" value="Add Comment">
            </form>
        </div>
        <div class="rating">
            <h3>Rate This Show</h3>
            <div class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <input id = "add-review" type="submit" value="Add your rating">
        </div>
    </div>
    <div class="comment-section" data-id=${data.id}>
    </div>
  </div>
    `;
};

const displayComments = async () => {
  const commentSection = document.querySelector('.comment-section');
  const comments = await getComments(commentSection.dataset.id);
  commentSection.innerHTML = '';
  commentSection.innerHTML += `
      <h3>Comments</h3>
          ${comments.map((com) => `<div class="user-comment">
                <i class="fa-solid fa-circle-user fa-2x"></i>
                <div class="comment">
                    <p class="username">${com.username}</p>
                    <p>${com.comment}</p>
                </div>
            </div>`).join('')}
      `;
};

export { createModal, popup, displayComments };
