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



// Another One 
class validationError extends Error{
    printCustomerSupport()
    {
        return `Validation Failed:- (  (details: ${this.message}))`
    }
}
try{
    throw new validationError ("Nota valid phone number")

}catch(error){
    if(error instanceof validationError)
    {
        console.log(error.name);
        console.log(error.printCustomerSupport());

    }else{
        console.log("Unknown error",error);
        throw error
    }
}