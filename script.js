function test(arr, func) {
    for (let i = 0; i < arr.length; i++){
    arr[i] = func(arr[i]);
}
    return arr;
}

function swr(num) {
    return num*num;
}

console.log( test([1, 2, 3], swr));