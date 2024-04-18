class Animal{
    constructor(name)
    {
        this.name=name
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
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
}
const d=new Dog("Roman")
d.speak()


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