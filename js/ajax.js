'use strict';

const inputRub = document.querySelector('#rub'),
	inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
	const request = new XMLHttpRequest();
	request.open('GET', './js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
	request.send();
	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.response);
		}
	});
	/* status (коды: 404.....); 
	statustext (not found); 
	response - ответ;
	readyState:
		0 - unset, 
		1 - opened, 
		2 - headers_received, 
		3 - loading, 
		4 - done) */
});