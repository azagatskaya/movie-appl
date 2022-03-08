"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

switch (true) {
	case (personalMovieDB.count < 10):
		alert("Просмотрено довольно мало фильмов");
		break;
	case (10 <= personalMovieDB.count && personalMovieDB.count <= 30):
		alert("Вы классический зритель");
		break;
	case (30 < personalMovieDB.count):
		alert("Вы киноман");
		break;
	default:
		alert("Произошла ошибка");

}

for (let i = 0; i < 2; i++){
	addFilm();
}

function addFilm() {
	let filmName = null,
		filmRate = null;
	do {
		filmName = prompt('Один из последних просмотренных фильмов?', '');
		filmRate = +prompt('На сколько оцените его?', '');
	} while (filmName == null || filmRate == null || filmName == false ||
	filmRate == false || filmName.length > 50);
	personalMovieDB.movies[filmName] = filmRate;
}
console.log(personalMovieDB);