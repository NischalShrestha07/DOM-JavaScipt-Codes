

let a = 5;
let b = 6;
let c = 7;

// Formula for Area of Triangle :   1/2(s(s-a)(s-b)(s-c))

let s = (a + b + c) / 2;

// area = ((s * (s - a) * (s - b) * (s - c))) / 2;
area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("The area of the triangle with given sides is: " + area);