class Student {
	constructor(name) {
		this.name = name;
	}
}
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let users = [
	new Student('user1'),
	new Employee('user2'),
	new Student('user3'),
	new Employee('user4'),
	new Student('user5'),
	new Employee('user6'),
	new Student('user7'),
];

for(let elem of users) {
    // console.log(elem instanceof Student);
    if(elem instanceof Student) {
        console.log(elem.name)
    }
}