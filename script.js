class stud {
    name;
    surn;

    show() {
       return this.name + '  ' + this.surn;
    }
}

let stud1 = new stud;
stud1.name = 'bill';
stud1.surn = 'geit'

console.log(stud1.show())