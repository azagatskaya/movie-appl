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
let testCalc = (x, y) => x - y;
let result = testCalc(5, 2);
console.log(result);
