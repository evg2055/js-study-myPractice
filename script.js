const BUTTON = document.querySelector('#button');
const P = document.querySelector('#p');

BUTTON.addEventListener('dblclick', () => P.innerHTML = '<b>' + P.innerHTML + '</b>');