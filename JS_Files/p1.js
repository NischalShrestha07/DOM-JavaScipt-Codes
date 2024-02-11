// const prompt = require("prompt-sync")();

// let age = prompt("Enter Your Age")
age = Number.parseInt(age)

const canDrive = (age) => {
    age >= 18 ? true : false
}

if (canDrive(age)) {
    alert("Yes You can Drive")
}
else {
    alert("You cannot Drive")
}