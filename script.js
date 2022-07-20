class jober {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    show() {
        console.log(this.name + ' ' + this.salary)
    }
    upSalary() {
        this.salary += this.salary * 0.1;
        console.log(this.salary)
    }
}

let igor = new jober('igor', 300);

igor.upSalary();
igor.upSalary();
igor.upSalary();