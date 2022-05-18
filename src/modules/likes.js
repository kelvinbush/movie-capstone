const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mvKaShmT3vCA4Q2ipkvC';

const getLikes = async () => {
  const response = await fetch(`${baseUrl}/likes`);
  return await response.json();
};

const getLike = (id, likes) => {
  if (likes.length > 0) {
    const result = likes.find((like) => +like.item_id === +id);
    return result ? result.likes : 0;
  } else {
    return 0;
  }
};
