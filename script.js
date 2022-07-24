class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}
class Position {
    constructor(name) {
        this.name = name;
    }
}
class Department  {
    constructor(department) {
        this.department = department;
    }
}

let department = new Department('develop');
let position = new Position('midele');
let employee = new Employee('ivan', position, department);

console.log(employee.name, employee.position.name, employee.department.department);