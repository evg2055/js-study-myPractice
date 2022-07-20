class stud {
    IN(str,str2) {
        return str[0].toUpperCase() + str2[0].toUpperCase()
    }
}

let studJo = new stud;
studJo.name = 'jo';
studJo.surn = 'ma'

console.log(studJo.IN(studJo.name, studJo.surn))