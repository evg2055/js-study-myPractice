let inp = document.querySelector('#inp');

inp.addEventListener('blur', function() {
	let digits = inp.value.split('');
	let sum = 0;
	
	for (let digit of digits) {
		sum += +digit;
	}
	
	console.log(sum);
});