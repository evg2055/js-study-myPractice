let elem1 = document.querySelector('#elem1');
elem1.addEventListener('blur', func);

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('blur', func);

function func() {
	console.log(this.value); // выведет или 'text1', или 'text2'
}
