class employee {
    #name;
    #surn;

    setName(name) {
        this.#name = name;
        return this;

    }
    setSurn(surn) {
        this.#surn = surn;

    }
    getName() {
        return this.#name;
    }
    getSurn() {
        return this.#surn;
    }
}

let employee1 = new employee();

employee1.setName('john').setSurn('travolta');
console.log(employee1.getName(),employee1.getSurn());