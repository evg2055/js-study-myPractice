// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 		4: 'data14',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 	},
// ];

// for (let elem of data) {
// 	// console.log(elem);
// 	for (let date in elem) {
// 		// console.log(date);
// 		console.log(elem[date]);
// 	}
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// // Выведите на экран данные каждого работника в формате имя - зарплата.

// for (let elem of employees) {
// 	console.log(elem.name + elem.salary);
// }

// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 			'data224',
// 		],
// 		3: [
// 			'data231',
// 			'data232',
// 			'data233',
// 			'data234',
// 			'data235',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 		],
// 	},
// ];

// for (let elem of data) {
// 	for (let key in elem) {
// 		let underObj = elem[key];
// 		for (let underElem of underObj) {
// 			console.log(underElem);
// 		}
// 	}
// }