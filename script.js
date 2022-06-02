const BUTTON = document.querySelector('#button');
let i = 0;

function func() {
   this.value = i++;
   if (i > 5) {this.removeEventListener('click', func)}
}

BUTTON.addEventListener('click', func)