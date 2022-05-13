function test(num1, num2) {
    function sqr(num) {
        return num*num;
    }
    function cube(num) {
        return num*num*num;
    }

    return sqr(num1) + cube(num2);
}

console.log(test(2, 3));