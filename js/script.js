"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
}
// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

// detectPersonalLevel();
// rememberMyFilms();
showMyDB(personalMovieDB.private);

function showMyDB(hidden) {
	if (!hidden) {
		console.log("Hidden: false");
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
	}
}

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
		console.log("Вы классический зритель");
	} else if (30 < personalMovieDB.count) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

function rememberMyFilms() {
	for (let i = 0; i < 1; i++) {
		const filmName = prompt('Один из последних просмотренных фильмов?', ''),
			filmRate = +prompt('На сколько оцените его?', '');
		console.log(`filmName=${filmName}`);
		console.log(`filmRate=${filmRate}`);
		if (filmName != null && filmRate != null && filmName != '' &&
			filmRate != '' && filmName.length <= 50) {
			personalMovieDB.movies[filmName] = filmRate;
			if (confirm("Хотите добавить еще один фильм?")) {
				i--;
			}
		} else {
			i--;
		}
	}
}