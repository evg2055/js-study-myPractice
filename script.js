let i = 10;

let timerId = setInterval(() => {
	i--;

	i >= 0 ? console.log(i) : clearInterval(timerId) + console.log('done');
}, 1000);