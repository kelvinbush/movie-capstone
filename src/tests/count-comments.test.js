import countComments from '../modules/count-comments.js';

describe('Passed in Comments', () => {
  test('Pass in five comments', () => {
    const comments = [{
      item_id: 1,
      username: 'user1',
      comment: "I don't like this movie",
    },
    {
      item_id: 2,
      username: 'user2',
      comment: 'I like this movie',
    },
    {
      item_id: 3,
      username: 'user3',
      comment: 'I like this movie',
    },
    {
      item_id: 4,
      username: 'user4',
      comment: 'I like this movie',
    },
    {
      item_id: 5,
      username: 'user5',
      comment: 'I like this movie',
    },
    ];
    expect(countComments(comments)).toBe(5);
  });

  test('Pass in 1 comment', () => {
    const comments = [{
      item_id: 1,
      username: 'user1',
      comment: "I don't like this movie",
    },
    ];
    expect(countComments(comments)).toBe(1);
  });

  test('Pass in 0 comment', () => {
    const comments = [];
    expect(countComments(comments)).toBe(0);
  });
});