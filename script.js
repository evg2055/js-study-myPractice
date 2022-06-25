'use strict'

const BUTTON = document.querySelector('#button');

BUTTON.addEventListener('click', function func() {
	 let i = 10;

	 setInterval(() => console.log(--i), 1000);

	 this.removeEventListener('click', func);
});

