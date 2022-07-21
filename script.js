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
    setName(name) {
        this.#name = name;
    }
    setAge(age) {
        this.#age = age;
    }
    setSalary(salary) {
        this.#salary = salary;
    }
}

let employee1 = new Employee

employee1.setSalary(1000);
console.log(employee1.getSalary());