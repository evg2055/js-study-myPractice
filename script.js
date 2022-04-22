// 91 of 312
// С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let arr = [];
let str = '';

for (let i = 0; i < 5; i++) {
    str += 'xx';
    arr.push(str);
}

console.log(arr);