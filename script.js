// class Emploeey {
//     #name;
//     #salary;
    
//     constructor(name, salary) {
//         this.#name = name;
//         this.#salary = salary;
//     }

//     getName() {
//         return this.#name;
//     }
//     getSalary() {
//         return this.#salary;
//     }
// };

// class EmployeesCollection {
//     #users; 
//     #salary;

//     constructor(user, salary) {
//         this.#users = [];
//         this.#salary = [];
//     }

//     getSumSalary() {
//         let sumSalary = 0;

//         for (let elem of this.#salary) {
//             this.#salary += elem.#salary;
//         }
//         return sumSalary;
//     }

//     getShowEmploeey() {
//         for(let user of this.#users) {
//             console.log(user);
//         }
//     }

//     addUser(name, salary) {
//         this.#users.push(name);
//         this.#salary.push(salary);
//     }
// }

// let emmCol = new EmployeesCollection; 
// let user1 = new Emploeey('john', 100);
// let user2 = new Emploeey('ron', 200);

// emmCol.addUser(user1.getName(), user1.getSalary());
// emmCol.addUser(user2.getName(), user2.getSalary());

// console.log(emmCol);

// function getNamber() {
//     return ++nowNamber;
// }

let nowNamber = 0;
class Emploeey {
    #number = {};

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        this.#number = ++nowNamber;
    }

    getUser() {
        return this;
    }
}

let emploeey1 = new Emploeey('eric', 101);
let emploeey2 = new Emploeey('john', 151);


// console.log(emploeey2.getUser());

class CollectionEmploeeys {
    #user = [];

    add(user){this.#user.push(user)};

    showSalary() {
        for(let elem of this.#user) {
            console.log(elem.name);
        }
    }

    sumSalary() {
        let sum = 0;

        for(let elem of this.#user) {
            sum += elem.salary;
        }

        console.log(sum)
    }
};
let newColection = new CollectionEmploeeys;

newColection.add(emploeey1);
newColection.add(emploeey2);
newColection.sumSalary();