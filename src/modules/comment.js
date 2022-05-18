const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mvKaShmT3vCA4Q2ipkvC';

const getComments = async (id) => {
  const response = await fetch(`${baseUrl}/comments?item_id=${id}`);
  const data = await response.json();
  return data;
};

export default getComments;