'use strict';

let arr = [[1,4,5,5],[3,545,32,223,544],[344,2223,442]];
const TABLE = document.querySelector('#table');
let BUTTON =document.querySelector('#button');


for(let subarr of arr) {
    let newTr = document.createElement('tr');
    for(let elem of subarr) {
        let newTd = document.createElement('td');
        newTd.innerHTML = elem;
        newTr.appendChild(newTd);
    }
    TABLE.appendChild(newTr);
}
let tdArr = document.querySelectorAll('#table td');

for(let i = 0; i <= tdArr.length-1; i++) {
    tdArr[i].addEventListener('click', (event) => {
        event.target.innerHTML = tdArr.length - i
    })
}


