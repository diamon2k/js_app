const numberOfFimlms = +prompt ('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFimlms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('One of the last movies watched?', ''),
      b = +prompt('How much do you rate it?', ''),
      c = prompt ('One of the last movies watched?', ''),
      d = +prompt('How much do you rate it?', '');
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);