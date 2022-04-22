// Выведите на экран следующую пирамидку:

// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

// let str = '';

// for (let i = 1; i <= 5; i++) {
// 	str += 'xx';
// 	document.write(str + '<br>');
// }

// for (let i = 1; i <= 9; i++) {
// 	for (let j= 1; j <= 3; j++) {
// 		document.write(i);
// 	}
// 	document.write('<br>');
// }

// Выведите на экран следующую пирамидку:

// 1
// 333
// 55555
// 7777777
// 999999999

// for (let i = 1; i <= 9; i++) {
// 	if(i % 2 !== 0) {
// 		for (let j = 1; j <= i; j++){
// 			document.write(i);
// 		}
// 		document.write('<br>');
// 	}
// }

// Выведите на экран следующую пирамидку:

// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

// for (let i = 6; i >= 1; i--) {
// 	let str = '';
// 	for (let j = 1; j < i; j++) {
// 		str += 'xx';
// 	}
// 	document.write(str + '<br>');
// }

// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

// for (let i = 9; i >= 0; i--) {
// 	let str = '';
// 	for (let j = 0; j < i; j++) {
// 		str += i;
// 	}
// 	document.write(str + '<br>');
// }