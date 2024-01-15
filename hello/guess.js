const prompt = require("prompt-sync")();

// num = prompt("Enter any number")
// num = 45;
let num = parseInt(prompt("Guess the number"))

while (num == userNo) {
    console.log("***Welcome to the Number Guessing Game***");
    userNo = prompt("Guess The Number: ")    // console.log("Congratulations You Guessed the correct Number");
}
if (userNo > num) {
    console.log("Enter Lower Number Please..")

}
else if (userNo < num) {
    console.log("Enter Higher Number Please..")

}

}