// const x = +prompt('X'),
// 	y = +prompt('Y'),
// 	z = prompt('action');
// console.log(calculator(x,y,z));
// // calculator(x, y, z);
// function calculator(x, y, z) {
// 	let res = 0;
// 	switch (z) {
// 		case ('+'):
// 			res = x + y;
// 			break;
// 		case ('-'):
// 			res = x - y;
// 			break;
// 		case ('*'):
// 			res = x * y;
// 			break;
// 		case ('/'):
// 			res = x / y;
// 			break;
// 	}
// 	return res;
// }
// let testCalc = (x, y) => x - y;
// let result = testCalc(5, 2);
// console.log(result);

// 019 - callback

// function first() {
// 	setTimeout(function () {
// 		console.log('1');
// 	}, 500);
// }
// function second() {
// 	console.log('2');
// }
// function learnJS(lang, callback) {
// 	console.log(`Я учу ${lang}.`);
// 	callback();
// }
// learnJS("JavaScript", function () {
// 	console.log('Я прошел 019 урок.');
// });

// 020 - objects

// const obj = new Object();
const options = {
	fuel: {
		hybrid: 20000,
		petrol: 0,
		diesel: -20000
	},
	transmission: {
		automatic: 60000,
		manual: 0,
		robotic: 30000
	},
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('Test');
	}
};
// for (let key in options.fuel) {
// 	console.log(key);
// }
// console.log(options.fuel.hybrid);
// console.log(options.colors.border);
// options.makeTest();
// let counter = 0;
// for (let key in options) {
// 	console.log(`Св-во ${key} имеет значение ${options[key]}`);
// 	if (typeof options[key] === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Св-во ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		counter++;
// 	}
// }
// console.log(`Object.keys(option).length = ${Object.keys(options).length}`);

// 021 Arrays

// sort, filter, split, push, pop

// 022 Передача по ссылке или значению

// const targetObj = Object.assign({}, options);
// options.transmission.manual = 333;
// console.log(targetObj);
// targetObj.transmission.manual = 30;
// console.log(targetObj);
// console.log(options);

const shoppingMallData = {
	shops: [{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

isBudgetEnough(shoppingMallData);

function isBudgetEnough(data) {
	const reqBudget = requiredBudget(data, shopsVolume(data));
	return reqBudget > data.budget ? 'Бюджета недостаточно' : 'Бюджета достаточно';
}

function shopsVolume(data) {
	return data.shops.reduce((sum, shop) => {
		return sum += shop.width * shop.length * data.height;
	}, 0);
}

function requiredBudget(data, volume) {
	return volume * data.moneyPer1m3;
}