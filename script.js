//Завдання 1
const numberOfFimlms = +prompt ('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFimlms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt ('One of the last movies watched?', ''),
//       b = +prompt('How much do you rate it?', ''),
//       c = prompt ('One of the last movies watched?', ''),
//       d = +prompt('How much do you rate it?', '');
    
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//Завдання 2
for (let i = 0; i < 2; i++) {
    const a = prompt ('One of the last movies watched?', ''),
          b = +prompt('How much do you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log ('watched very few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('def viever');
} else if (personalMovieDB.count >= 30) {
    console.log('cinemaMan');
} else {
    console.log('error');
}

console.log(personalMovieDB);