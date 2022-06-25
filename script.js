let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.apply(elem, ['Иван', "Иванов"]); // тут должно вывести 'привет, Иванов Иван'