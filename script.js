const parent = document.querySelector('#parent');
const elems = document.querySelectorAll('#parent li') 

for (let elem of elems) {
    elem.addEventListener('click', (event) => {
        parent.removeChild(event.target);
    })
}


