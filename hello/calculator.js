function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a + b;
}
function mul(a, b) {
    return a + b;
}
function div(a, b) {
    return a + b;
}
prompt("Choose from the option");
print("A. Addition")
print("B. Subtraction")
print("C. Multiplication")
print("D. Division")
choice = prompt("Enter you choice");

n1 = prompt("enter the first number");
n2 = prompt("enter the second number");

if (choice == 'a' || choice == 'A') {
    console.log(add(n1, n2));


} 