const ELEM = document.querySelector('#elem');

ELEM.addEventListener('click', () => {
    alert('!')
    ELEM.remove();
})