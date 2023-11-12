class MakeCar
    {
        constructor(carMake, carModel, carColor, numOfDoors){
            this.make = carMake
            this.model = carModel
            this.color = carColor
            this.doors = numOfDoors
        }
        
        lock(){
            alert(`Locked $(this.doors) doors!`)
        }
    }
let hondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
let teslaRoadster = new MakeCar('Tesla', 'Roadser', 'Red', 2)

teslaRoadster.bluetooth = true
console.log (teslaRoadster.bluetooth) //true
console.log (hondaCivic.bluetooth) //undefined

// MakeCar.prototype.bluetooth = True 'Sets the property of all objects of type MakeCar