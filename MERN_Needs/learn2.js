function add (a,b){
    return a+b
}

let sum =add
function average(a,b,fn)
{
    return fn(a/b)/2

}
let result=average(10,20,sum)
console.log(result);