

// let firstName="Nischal"
// let age=21
// let student=true 

// console.log("Hello",firstName)
// console.log("You are",age,"years old")
// console.log("Enrolled",student);


// document.getElementById("p1").innerHTML="Hello "+firstName
// document.getElementById("p2").innerHTML="You are "+age+" years old"
// document.getElementById("p3").innerHTML="Enrolled "+student

// let username=window.prompt("Whats your name:")
// console.log(username);
let username
document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").valu0;
    // username=document.getElementById("myText");
    console.log(username);
    document.getElementById("myLabel").innerHTML="HEllo "+username
}