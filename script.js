function getLackyTickets() {
	let result = [];

	for (let i = 1001; i < 1000000; i++) {
		if (lackyIs(i)) {
			result.push(normalizeNum(i));
		}
	}

	return result;
}

console.log(getLackyTickets());

function lackyIs(num) {
	let str = String(normalizeNum(num));

	let sum1 = +(str[0]) + +(str[1]) + +(str[2]);
	let sum2 = +(str[3]) + +(str[4]) + +(str[5]);

	return sum1 == sum2;
}

// console.log(lackyIs(101200));

function normalizeNum(num) {
	let str = String(num);

	if (str.length == 5) {
		str = '0' + str;
	}
	if (str.length == 4) {
		str = '00' + str;
	}

	return str;
}

// console.log(normalizeNum(21223));