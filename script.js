class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Emploeey extends User {
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
};

let ivanEmploeey = new Emploeey;

ivanEmploeey.setSalary(100);
console.log(ivanEmploeey.getSalary());