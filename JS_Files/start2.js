// fruits[5]="mango"
// console.log(fruits[5]);
// console.log(Object.keys(fruits));
// console.log(fruits.length);


// const array1=['a','b','c']
const array1=['mango','orange','kiwi']
const iterator1=array1[Symbol.iterator]();

for(const value of iterator1)
{
    console.log(value);

}



const arr=['hari','shuam','ram','krishna']
const  letterResult=document.getElementById("letterResult")
for(const letter of arr)
{
    const li=document.createElement("li")
    li.textContent=Letter
    letterResult.appendChild(li)
}