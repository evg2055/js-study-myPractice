function leapYear (year) {
    let date = new Date( year, 2, 0);

    return date.getDate() == 29;
}

let year = 2022;

// console.log(leapYear(2016));
let lastLeapYear = function() {
    
    for (let i = year; leapYear(i) !== true; i++) {
    
     if (leapYear(i + 1)) {
         year = i + 2;
         return i + 1;
     };
}
};


for (let i = 1 ; i < 10; i++) {
    console.log(lastLeapYear(year));
};


