let arr = [121, 331, 423, 4222, 552, 523, 674, 52];
result = [];

function getDigits(num) {
	return String(num).split('');
}
// console.log(getDigits(255));

function getSum(arrNum) {
	let sum = 0;

	for (let elem of arrNum) {
		sum += +elem;
	}

	return sum;
}
// console.log(getSum(getDigits(123)));

for (let elem of arr) {
	let res = getSum(getDigits(elem));

	if ( res >= 1 && res <= 9) {
		result.push(res);
	}
}

console.log(result);