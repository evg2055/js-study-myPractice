// let arr = [3, 74, 35, 25, 36, 60, 60, 57, 50];

// let max = Math.min(...arr);

// console.log(max);

let result;

function middleMath (...num) {
    let sum = 0;
    let amountDigitals = 0;

    for (let elem of num) {
    sum += elem;
    amountDigitals++;
}

    return sum/amountDigitals;

};

console.log(middleMath(3, 74, 35, 25, 36, 60, 60, 57, 50));


