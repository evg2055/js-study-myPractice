const years = document.querySelectorAll('li');
let years6 = [];
let sumYears = 0;

for (let year of years) {
   const NUM = year.textContent;
   let sum = 0;
   for (let i = 0; i < NUM.length; i++){
      sum += +NUM[i];
   }
   sum === 6 ? years6.push(NUM) : null ;
}
 for (let year of years6) {
   sumYears += +year;
 }

 console.log(sumYears, years6);