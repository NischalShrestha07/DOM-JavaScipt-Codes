
class gymEquipment{
    constructor(name)
    {
        this.name=name
    }
// biceps(){
//     console.log(`${this.name} is using in Biceps Exercise`);
// }
}
class letsGo extends gymEquipment{
    constructor(name)
    {
    super(name)
    }
    biceps(){
        console.log(`${this.name} is doing biceps exercise.`);
    }
    shoulder(){
        console.log(`${this.name} is working on shoulders.`);
    }
    back(){
        console.log(`${this.name} is goona make demon back🤣.`);
    }
}
const workout=new letsGo("Nischal")
workout.biceps()
workout.shoulder()
workout.back()