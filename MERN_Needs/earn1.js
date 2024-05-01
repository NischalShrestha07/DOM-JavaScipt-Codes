// function say(message){
//     console.log(message  );
// }

// say('Nischal Shrestha')
function add (){
    let sum =0
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i]

    }
    return sum

}
result=add(45,5,45,10)
console.log(result);