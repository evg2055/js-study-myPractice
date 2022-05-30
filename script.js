const BUTTON = document.querySelector('#button');
const ELEM = document.querySelector('#elem');
let result = [];


BUTTON.addEventListener('click', function () {
    console.log(ELEM.className.split(' '));
})