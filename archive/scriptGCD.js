'use strict';

let num1 = 1000;
let num2 = 3000;

console.log(getGreatestCommonDivisor(num1, num2));

function getGreatestCommonDivisor(num1, num2) {
	let arrCommomDivisor = arrDouble(num1, num2);

	return Math.max.apply(0, arrCommomDivisor);
}
function arrDouble(num1, num2) {
	let divisorArr1 = getDivisor(num1);
	let divisorArr2 = getDivisor(num2);
	let result = []; 

	for (let elem of divisorArr1) {
		if (inArray(elem, divisorArr2)) {
			result.push(elem);
		}
	}
	return result;
}

// console.log(arrDouble(12, 18));

function getDivisor(num) {
	let result = [];

	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
}

// console.log(getDivisor(12));

function inArray(elem, arr){
	return arr.indexOf(elem) !== -1;
}
// console.log(inArray(4, [33, 3, 3, 4, 5]));