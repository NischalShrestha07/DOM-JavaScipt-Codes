class Animal{
    constructor(name)
    {
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
    eat(){
        console.log(`${this.name} want to eat.`);
    }
}

class Dog extends Animal{
    constructor(name)
    {
        super(name)
    }
    speak()
    {
        console.log(`${this.name} is barking.`);
    }
    eat()
    {
        console.log(`${this.name} is eating food.`);
    }
    walk(){
        console.log(`${this.name} is walking.`);
    }
}
const d=new Dog("Roman")
d.speak()
d.eat()




// Another One
class Cat{
    constructor(name)
    {
        this.name=name

    }
      speak()
      {
        console.log(`${this.name} make a noise.`);
      }
}

class Lion extends Cat{
    speak()
    {
        super.speak()
        console.log(`${this.name} is roaring.`);
    }
}

const hell=new Lion ("Drakuda")
hell.speak()