class employee {
    #name;
    #age;
    #salary;
    constructor(name, age, salary) {
        this.#name = name;
        this.#age = age;
        this.#salary = salary;
    }
    show() {
        console.log( this.#name + ' ' + this.#age + ' ' + this.#salary)
    }
}

let gen = new employee("gen", 22, 2000);

gen.show();