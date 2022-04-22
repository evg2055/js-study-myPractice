let N = prompt('введите число для нахождения факториала :')
let fact = 1;

for (let i = 1; i <= N; i++) {
    fact *= i;
}

alert(fact);