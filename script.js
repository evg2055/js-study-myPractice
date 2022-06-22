const P = document.querySelector('p');
const inp1 = document.querySelector('#fir');
const inp2 = document.querySelector('#sec');
const link = document.querySelector('#elem');

link.addEventListener('click', function func(event) {
	event.preventDefault();
	P.textContent = +inp1.value + +inp2.value;
})