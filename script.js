let elem = document.querySelector('#elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

func.call(elem, 'Иван', "Иванов"); // тут должно вывести 'привет, Иванов Иван'