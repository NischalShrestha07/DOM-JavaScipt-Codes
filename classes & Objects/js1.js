// class parentClass{
//     constructor()
//     {
//         return 1
//     }
// }
// console.log(new parentClass());

// class childClass extends parentClass{
//     constructor()
//     {
//         return 1

//     }
// }
// console.log(new childClass()); 
class Person{
    constructor(name="Anonymous")
    {
        this.name=name
    }
    introduce()
    {
        console.log(`Hello, my name is ${this.name}`);

    }
}

const person=new Person()
person.introduce()