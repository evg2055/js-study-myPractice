class User {
    setAge (age) {
        this.age = age;
    }
    getAge() {

        if (this.age != undefined)
        {return this.age;} else {console.log('error2')}
    }
}
class Emploeey extends User {
    setAge (age) {
        age > 18 && age < 65 ? this.age = age : console.log('error');
    }
}

let old = new Emploeey;

old.setAge(66);
console.log(old.getAge());