let i = 10;

function func() {
	i--;
	i >= 0 ? console.log(i) : console.log('done');
}

setInterval(func,1000);