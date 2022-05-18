import countMovies from '../modules/count.js';

describe('Count movies', () => {
  it('should return 5 ', () => {
    const movies = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry', year: 1999 },
    ];
    expect(countMovies(movies)).toBe(5);
  });

  it('should return 0 ', () => {
    const movies = [];
    expect(countMovies(movies)).toBe(0);
  });

  it('should return 1 ', () => {
    const movies = [
      { title: 'The Shawshank Redemption', year: 1994 },
    ];
    expect(countMovies(movies)).toBe(1);
  });
});
