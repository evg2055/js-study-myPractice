let P = document.querySelectorAll('p');
const BUTTON = document.querySelector('#button');

BUTTON.addEventListener('click', function func() {
   let i = 0;

   for(let elem of P) {
      i++;
      console.log(elem);
      elem.setAttribute('data-num', i);
      elem.innerHTML = elem.innerHTML + elem.getAttribute('data-num');
}
})
