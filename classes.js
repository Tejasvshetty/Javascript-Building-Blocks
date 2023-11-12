function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.lock = function(){
        alert(`Locked $(this.doors) doors!`)
    }
}
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new MakeCar('Tesla', 'Roadser', 'Red', 2)

teslaRoadster.bluetooth = true
console.log (teslaRoadster.bluetooth) //true
console.log (hondaCivic.bluetooth) //undefined