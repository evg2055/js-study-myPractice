class User {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Emploeey extends User {

};

let ivanEmploeey = new Emploeey;

ivanEmploeey.setName('ivan');
console.log(ivanEmploeey.getName());