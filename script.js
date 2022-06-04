const DIV = document.querySelector('#div1');
const BUTTON = document.querySelector('#button');

BUTTON.addEventListener('click', () => {
   DIV.style.width = '100px';
   DIV.style.height = '100px';
   DIV.style.backgroundColor = 'yellow';
   DIV.style.color = 'red';
   DIV.innerHTML = 'hi';
})
