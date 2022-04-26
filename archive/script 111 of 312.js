// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// // С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

// let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
// console.log(result);

// function round(num) {
// 	return num.toFixed(3);
// }
// // С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
//  которое потребовалось для достижения результата.

// function delitel(num) {
// //  return Math.random(num);
//     let i = 1;
//     let result = num;
//     //  return console.log(num);

//     while(true) {
//         result = result / 2;

//         if (result < 10) {
//         return i;
//       }
//     //   console.log(result);
//       i++;
//     }
// }

// console.log(delitel(100));

function func(num1, num2) {
	
	
	if (num1 > 0 && num2 > 0) {
		return  num1 * num2;
	} else {
		return num1 - num2;
	}
	
}

console.log(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории.