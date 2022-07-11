const TABLE = document.querySelector('table');
const TRS = document.querySelectorAll('table tr');
const TDS = document.querySelectorAll('table td');

for(let elem of TRS) {
    let addTD = document.createElement('td');
    let remove = document.createElement('a');
    remove.href = '';
    remove.innerHTML = 'remove';
    remove.addEventListener('click', (event) => {
        addTD.parentElement.remove(event.target.parentElement);
        // console.log(elem.parentElement, event.target.parentElement)
        event.preventDefault();
    })
    addTD.appendChild(remove);
    elem.appendChild(addTD);
}

