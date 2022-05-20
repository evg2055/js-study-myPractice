// let arr = ['ret', 'are', 'typ'];


// let newArr = arr.map(function(elem) {
//    return elem.split('').reverse().join('');
// })

// console.log(newArr);

// let arr = ['123', '456', '789'];

// let newArr = arr.map(function(strNum) {
//   return strNum.split('');
// })

// console.log(newArr);

let arr = [1, 2, 3, 4, 5];

let indexArr = arr.map(function(elem, index) {
  return elem + String(index);
})

console.log(indexArr);