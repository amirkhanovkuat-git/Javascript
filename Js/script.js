/* jshint node: true */
"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {

    for (let i = 0; i < 2; i += 1) {

        const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его', '');
    
        if (a !== null && a !== '' && b !== null && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error!');
            i -= 1;
        }
        
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30 ) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
    
}

// detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i += 1) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);        
    }
}

writeYourGenres();