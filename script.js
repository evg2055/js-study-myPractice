'use strict';

let arr = [[1,4,5,5],[3,545,32,223,544],[344,2223,442]];
const TABLE = document.querySelector('#table');
let BUTTON =document.querySelector('#button');

for(let subarr of arr) {
    let newTr = document.createElement('tr');
    for(let elem of subarr) {
        let newTd = document.createElement('td');
        newTd.innerHTML = elem;
        BUTTON.addEventListener('click', () => {
            newTd.innerHTML *= 2;
        });
        newTr.appendChild(newTd);
    }
    TABLE.appendChild(newTr);
}