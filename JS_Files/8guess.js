const prompt = require("prompt-sync")();

var num = Math.ceil(Math.random() * 10);
var user = prompt("Enter any number between 0 and 10")
if (user == num) {
    console.log("Correct");
} else {
    console.log("Try Again");
}
