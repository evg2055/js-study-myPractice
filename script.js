'use strict';

const Paragraph = document.querySelector('#paragraph');

let i = 1;
let j = 1000;

function func() {
	setTimeout(() => {
		console.log(i++);
		j += 1000;
		func();

	}, j)
}

func();