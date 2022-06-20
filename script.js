// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName,
//  по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный 
//  знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.

const UL = document.querySelector('#elem');
let newLi = document.createElement('li');


UL.addEventListener('click', (event) => {
	console.log(event.target.tagName);

	// event.target.tagName === 'LI' ? alert('yes') : alert('null') ;

	if (event.target.tagName === 'LI') {
		event.target.innerHTML += '!';
	} else if (event.target.tagName === 'UL'){
		UL.appendChild(newLi);
		newLi.textContent = 'text';
		;
	}
} )