let input = document.querySelector('#first');
let button = document.querySelector('#button');
let obj = {1: 'mon', 2: 'tue', 3: 'wed', 4: 'Thu', 5: 'fri', 6: 'sat', 7:' sat'}

button.addEventListener('click', () => {
	let date = new Date (input.value);
	console.log(date, obj[date.getDay()]);
})

