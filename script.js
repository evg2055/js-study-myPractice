class User {};
let USER1 = new User;
let USER2 = new User;
let USER3 = new User;

USER1.name = 'eric';
USER2.name = 'john';
USER3.name = 'crack';
USER1.salary = 100;
USER2.salary = 200;
USER3.salary = 300;

console.log(USER1.salary + USER2.salary + USER3.salary)