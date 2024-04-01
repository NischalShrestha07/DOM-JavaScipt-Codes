// 2D array


let fruits=["apple","orange","banana"]
let vegetables=["carrots","onions","potatoes"]
let meats=["eggs","chicken","beef"]

let groceryList =[fruits,vegetables,meats]
groceryList[2][2]="milk"

// console.log(groceryList)

for(let food of groceryList){
    // console.log(food)
    for(let items of food){
        console.log(items)
    }
}