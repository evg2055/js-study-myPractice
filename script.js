// let p1 = document.querySelector('.p1');
// let p2 = document.querySelector('.p2');
// let p3 = document.querySelector('.p3');
// let p4 = document.querySelector('.p4');
// let p5 = document.querySelector('.p5');

// function func() {
//    this.innerHTML = '!' + this.innerHTML + '!' 
// }
 
// p1.addEventListener('click', func);
// p2.addEventListener('click', func);
// p3.addEventListener('click', func);
// p4.addEventListener('click', func);
// p5.addEventListener('click', func);

// const INPUT = document.querySelector('#inp');

// function func() {
//    this.value = this.value*2
// };

// INPUT.addEventListener('blur', func);

const INPUT = document.querySelectorAll('.text');
const BUTTON = document.querySelector('#button')

function inp() {
   let result = 0;

   for(let elem of INPUT) {
      result += +(elem.value);
   }
   
   document.querySelector('#p5').innerHTML = result;
}

BUTTON.addEventListener('click', inp);
