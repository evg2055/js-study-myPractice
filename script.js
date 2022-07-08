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
let i = 1;

for(let elem of tdArr) {
    elem.addEventListener('click', () => {
    
    let eL = elem.innerHTML;
    
    

    if (eL == '2' || eL == '3') {
        eL = i;
    } 
    if (eL == '1' || eL == '3') {
        i = 2;
        eL = i;
    }
    if (eL == '1' || eL == '2') {
        i = 3;
        eL = i;
    } else {elem.innerHTML = i;
    alert(eL)}
    elem.innerHTML = i;
    })

}