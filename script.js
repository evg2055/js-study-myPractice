"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', parent);

function parent() {
	console.log(this.value); // что выведет?
	
	function child() {
		console.log(this.value); // что выведет?
	}
	child();
}