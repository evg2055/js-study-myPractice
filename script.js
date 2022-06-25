let elem = document.getElementById('elem');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
}

let newFunc = func.bind(elem);

func.call(elem,'Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
newFunc('Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'