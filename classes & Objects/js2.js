class Polygon{
    constructor()
    {
        this.name="Polygon"

    }
} 

class Rectangle{

    constructor()
    {
        this.name="Rectangle"
    }
}
class Square extends Polygon{
constructor()
{
    super()
}
}
Object.setPrototypeOf(Square,Rectangle)

const newInstance=new Square()
console.log(newInstance instanceof Polygon);
console.log(newInstance instanceof Rectangle);


console.log(newInstance.name);