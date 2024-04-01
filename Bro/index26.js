// let numbers=[1,2,3,4,5,6,7,8,9,10]
// console.log(...numbers)
// // console.log(numbers)
// console.log(numbers)

// let class1=["harry","jame","nischal"]
// let class2=["shyam","goku","nRUTO"]

// class1.push(...class2)
// console.log(class1)



let a=1
let b=2
let c=3 
let d=4
let e=5


console.log(sum(a,b))

// function sum(a,b){
//     return a+b

// }

// this is called rest parameter
console.log(sum(a,b,c,d,e))

function sum(...numbers){
    let total=0
    for(let number of numbers)
    {
        total =total=number
    }
}