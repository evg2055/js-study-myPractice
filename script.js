// Пусть у вас есть картинка. Разместите ее на странице в помощью тега img. Пусть даны также кнопка и абзац.
//  Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

const P = document.querySelector('.p');
const BUTTON = document.querySelector('#button');
const img = document.querySelector('#img');

BUTTON.addEventListener( 'click', () => console.log(img.innerHTML));