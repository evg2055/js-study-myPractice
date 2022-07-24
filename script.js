class Employee {
    #name;
    constructor(name){
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

let employeeArrr = [
    new Employee ('igor'),
    new Employee ('igor1'),
    new Employee ('igor2'),
    new Employee ('igor3'),
]

for(let elem of employeeArrr) {
    console.log(elem.getName());
}