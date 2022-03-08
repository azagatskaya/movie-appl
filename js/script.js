"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

personalMovieDB.count = numberOfFilms;
for (let i = 0; i < 2; i++){
	addFilm();
}

function addFilm() {
	let filmName = prompt('Один из последних просмотренных фильмов?');
	let filmRate = prompt('На сколько оцените его?');
	personalMovieDB.movies[filmName] = filmRate;
}
console.log(personalMovieDB);