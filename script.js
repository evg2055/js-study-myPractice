let arr = [1, 3, 4, 6, 7, 9];


// function randomInt (min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(randomInt(10, 100));

// function shuffle(arr) {
// 	let result = [];

// 	while (arr.length > 0) {
// 		let random = randomInt(0, arr.length - 1);
// 		let elem = arr.splice(random, 1)[0];
// 		result.push(elem);
// 	}

// 	return result;
// }
//  console.log(shuffle(arr));

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min +1) + min);
}

function getArr(start, end) {
	let result = [];

	for (let i = start; i <= end; i++) {
		result.push(i);
	}

	return result;
}

// console.log(getArr(2, 13));

function shuffle(arr) {
	let result = [];
	
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}

	return result;
}

function shuffleArr(start, end) {
	return shuffle(getArr(start, end));
}

console.log(shuffleArr(10, 25));