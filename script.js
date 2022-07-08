const ELEM = document.querySelector('#elem');
const REMOVE = document.querySelector('#remove');

REMOVE.addEventListener('click', function (event) {
    ELEM.parentElement.removeChild(ELEM);
    event.preventDefault();

})