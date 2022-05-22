let arr = [];

function getRandomArr(min, max) {
    let i = 1;

    while (i < 10) {
        arr.push(getRandomInt(min, max));
        i++;
    }
    
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomArr(0, 100);
console.log(arr);



