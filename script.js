'use strict';

const START = document.querySelector('#start');
const STOP = document.querySelector('#stop');
const DISP = document.querySelector('#display');
let timerId;
let setTimer = 10;

function func() {
	timerId = setInterval(() => {
		START.removeEventListener('click', func)
		if(setTimer > 0 ) {
			DISP.value = setTimer--;
		} else {
			clearInterval(timerId);
			DISP.value = 'время истекло!';
		}
	}, 1000)
}

START.addEventListener('click', func)

STOP.addEventListener('click', () => {
	START.addEventListener('click', func);
	clearInterval(timerId);
	DISP.value = setTimer  + ' pause';
})