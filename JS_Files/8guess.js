const prompt = require("prompt-sync")();

let num = Math.ceil(Math.random() * 10);
let user = prompt("Enter any number between 0 and 10")
if (user == num) {
    console.log("Correct");
} else {
    console.log("Try Again");
}
