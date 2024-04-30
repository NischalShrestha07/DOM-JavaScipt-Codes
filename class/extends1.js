function oldStyleClass()
{
    this.someProperty=1
}
oldStyleClass.prototype.someMethod=function(){

}
class childClass extends oldStyleClass{

}
class modernClass{
    someProperty=1
    someMethod(){}
}
class anotherChildClass extends modernClass{}