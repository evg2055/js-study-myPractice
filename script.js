'use strict';
// щенячий патруль

const INPUT = document.querySelector('#input');
const PAR = document.querySelector('#paragraph');
const START = document.querySelector('#start');
const STOP = document.querySelector('#stop');
let i;
let timerId;

function func() {
	i = this.value;
	this.removeEventListener('blur', func)
	timerId = setInterval(() => {
		PAR.textContent = i++;
		if(i > 10) {clearInterval(timerId)}
	}, 1000)
}

INPUT.addEventListener('blur', func);

STOP.addEventListener('click', () => {clearInterval(timerId)})
