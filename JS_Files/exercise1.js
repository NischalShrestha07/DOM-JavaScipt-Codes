const prompt = require("prompt-sync")();

// let name = "Nischal"
// let age = 20
// let occupation = "Full Stack Developer"

// console.log("Hello everyOne Its me " + name + "\nI am " + age + " years old and am a " + occupation + " by profession");


// grade = 'C'
grade = prompt("Enter your grade").toUpperCase;
switch (grade) {
    case 'A':
        console.log("You got an " + grade + " , so here's a Chocolate for you!");

        break;
    case 'B':
        console.log("You got an " + grade + " , so here's a Chocolate for you!");

        break;
    case 'C':
        console.log("You got an " + grade + " there's room for improvement and here's your Candy!");
        break;
    case 'A':
        console.log("You got an " + grade + " , so here's a Chocolate for you!");

        break;

    default:
        console.log("Invalid Option");

        break;
}