const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mvKaShmT3vCA4Q2ipkvC';

const getComments = async (id) => {
  const response = await fetch(`${baseUrl}/comments?item_id=${id}`);
  const data = await response.json();
  return data.length > 0 ? data : [];
};

const postComment = async (record) => {
  const response = await fetch(`${baseUrl}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(record),
  });
  return response;
};

export { getComments, postComment };
