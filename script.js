// let now  = new Date();
// let year = now.getFullYear();

// for (let month = 0; month <= 11; month++) {
// 	let date = new Date(year, month, 1);
	
// 	if (date.getDay() == 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }


let now = new Date();
let count = 0;

for (let year = 2000; year < now.getFullYear() ; year++) {
    let date = new Date (year, 0);

    if (date.getDay() == 0 || date.getDay() == 6) {
        console.log(year);
        count++;
    }
}

console.log(count);