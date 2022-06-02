const divs = document.querySelectorAll('div');

for (let elem of divs) {
   elem.addEventListener('click', function () { alert(this.innerHTML)})
}
