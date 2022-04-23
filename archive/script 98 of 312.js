// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// // Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.

// console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0], arr[3][2]);

// let arr = [[1, 2], [3, 4], [5, 6]];
// // Обращаясь к каждому элементу массива найдите сумму всех его элементов.
// let sum = 0;

// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j <= 1; j++) {
//         sum += arr[i][j];
//     }
// }

// console.log(sum);

// let arr = [
//           [1, 2, 3, [4, 5, [6, 7]]],
//           [8, [9, 10]]
//           ];

// // Вручную, без цикла, найдите сумму элементов этого массива.

// console.log(arr[0][0] + arr[0][1] + arr[0][2]+ arr[0][3][0]+arr[0][3][1]+ arr[0][3][2][0]+
//      arr[0][3][2][1]+ arr[1][0]+ arr[1][1][0]+arr[1][1][1]);

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (let subArr of arr) {
// 	// for (let elem of subArr) {
// 		console.log(elem);
// 	// }
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// // С помощью вложенных циклов найдите сумму элементов этого массива.
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         // console.log(elem);
//         sum += elem;
//     }
// }
// console.log(sum);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0;
// С помощью вложенных циклов найдите сумму элементов этого массива.

// for (let subArr of arr) {
//     for (let elem of subArr) {
//         for (let subArr of elem) {
//             sum += subArr;
//         }
//     }
// }
// console.log(sum);

// for (let i = 0; i < arr.length; i++){
//     // console.log(arr[i]);
//     for(let j = 0; j < arr[i].length; j++) {
//         // console.log(arr[i][j]);
//         for (let k = 0; k < arr[i][j].length; k++) {
//             console.log(arr[i][j][k]);
//             sum += arr[i][j][k];
//         }
//     }
// }
// console.log(sum);

// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 0; j < 5; j++) {
//         arr[i].push(j + 1);
//     }
// }
// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push('x');
//     }
// }
//  for(let subArr of arr) {
//      console.log(subArr);
//  }
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         console.log(elem);
//     }
// }
 
// Сформируйте с помощью трех вложенных циклов следующий массив:

// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++)
//    { arr[i][j] = []; 
//   for (let k = 1; k <= 5; k++) {
//     arr[i][j].push(k);
//   }
// }
// }
// console.log(arr);
// for (let subArr of arr) {
//     for (let elem of subArr) {
//         console.log(elem);
//     }
// }

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }

// console.log(arr);
 
// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[1, 2], [3, 4], [5, 6], [7, 8]]

// let arr = [];

// for (let i = 0, k = 1; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = k++;
//     }
// }

// for (let subArr of arr) {
//     console.log(subArr);
// }
// console.log(arr);

// Сформируйте с помощью двух вложенных циклов следующий массив:

// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

// let arr = [];

// for (let i = 0, k = 2; i < 4; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 3; j++) {
//             arr[i][j] = k++,k++;
//     }
// }

// for (let subArr of arr) {
//     console.log(subArr);
// }

// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:

// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = [];

// for (let i = 0, n = 1; i < 2; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++){
//         arr[i][j] = [];
//         for (let k = 0; k < 2; k++) {
//             arr[i][j][k] = n++;
//         }
//     }
// }

// for (let subArr of arr) {
//     for (let elem of subArr) {
//         console.log(elem);
//     }
// }

// console.log(arr);

// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);