class Employee {
    #name;
    #age;
    #salary;

    // constructor(name, age, salary) {
    //     this.#name = name;
    //     this.#age = age;
    //     this.#salary = salary;
    // }

    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getSalary() {
        return this.#salary + '$';
    }
}

let employee1 = new Employee('igor', 22, 2000)

console.log(employee1.getSalary());