

today = new Date();

day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Thusday", "Friday", "Saturday"];

console.log("Today is:" + daylist[day]);

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();


check = (hour >= 12) ? "PM" : "AM";

hour = (hour >= 12) ? hour - 12 : hour;
//*triple equals(===) is a strict equality comparison operator, meaning it checks both value and data type.So, it's checking if the value of hour is exactly 0.*/
if (hour === 0 && check == "PM") {
    if (minute === 0 && second === 0) {
        hour = 12;
        check = "Noon";
    }
    else {
        hour = 12;
        check = 'PM';
    }
}

if (hour === 0 && check == 'AM') {
    if (minute === 0 && second === 0) {
        hour = 12;
        check = 'AM'
    }
}
console.log("Current Time is:" + hour + check + " : " + minute + ":" + second);