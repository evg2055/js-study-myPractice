let arr = [2, 4, 6, 9];

// let check = arr.every ( function (elem, index) {
//  return elem * index < 30;
// })

let check = arr.every((elem, index) => elem * index < 30);

console.log(check);