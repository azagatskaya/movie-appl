"use strict";


// start();

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
		while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
		}
	},
	showMyDB: function () {
		if (!personalMovieDB.private) {
			console.log("Hidden: false");
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDb: function () {
		if (personalMovieDB.private) {
			personalMovieDB.private = false;
		} else {
			personalMovieDB.private = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
			if (genre === '' || genre === null) {
				console.log('Вы не ввели название жанра, попробуйте еще раз');
				i--;
			} else {
				personalMovieDB.genres[i] = genre;
			}
		}
		personalMovieDB.genres.forEach((genre, i) => {
			console.log(`Любимый жанр #${i} - ${genre}`);
		});
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
			console.log("Вы классический зритель");
		} else if (30 < personalMovieDB.count) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	rememberMyFilms: function () {
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


};

// detectPersonalLevel();
// rememberMyFilms();
showMyDB(personalMovieDB.private);