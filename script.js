"use strict";

const elem = document.querySelector('#elem');

// elem.addEventListener('blur', func);

// function func() {
// 	alert ( square(this) );

// 	function square(param) {
// 		return param.value ** 2;
// 	}
// }
 function func() {
	console.log(this.value);

	let grog = () => console.log(this.value);
	grog()
 }
//  let grog = () => console.log(this.getSelection());

 elem.addEventListener('blur', func);