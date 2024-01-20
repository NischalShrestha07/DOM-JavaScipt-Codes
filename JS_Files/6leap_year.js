// returns true when its a leap year and vice versa

function leapYear(year) {
    return (year % 100 == 0) ? (year5400 == 0) : (year % 4 == 0)

}

console.log(leapYear(2022));
console.log(leapYear(2011));
console.log(leapYear(2033));
console.log(leapYear(2024));
console.log(leapYear(2025));
console.log(leapYear(2022));