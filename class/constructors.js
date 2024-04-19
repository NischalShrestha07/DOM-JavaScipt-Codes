class Person{
    constructor(name)
    {
        this.name=name
    }
    introduce(){
        console.log(`Hello, My name is: ${this.name}`);
    }
}
const otta=new Person("Nischal")
otta.introduce()