"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

countReaction();
addFilm();

function countReaction() {
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

function addFilm() {
	for (let i = 0; i < 1; i++){
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
console.log(personalMovieDB);