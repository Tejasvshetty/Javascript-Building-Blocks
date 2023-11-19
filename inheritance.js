class Animal{
    constructor(name){
        this._name = name //convention that it means not to change
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    speak(){
        console.log(`${this.name} barks`)
    }

    get breed(){
        return this._bread
    }
}

let simba = new Dog('Simba', 'Sheperd')
let luna = new Animal('luna')

let farm = [simba, luna]

for (a of farm){
    a.speak();
}

// Notes on the four pillars: Encapsulation, Abstraction, Inheritance, Polymoprhism
// Encapsulation: The process of storing functions (methods) with their associated data (properties) in one thing (object)
// ^ Makes it easier to add new stuff; makes it easier through read through was already coded; makes its so programmer is not afraid to make changes
// Abstraction: Hide details and show essentials
// ^ Smaller more manageable pieces of code - split the complexity of the project into manageable parts
// Inheritance: Make a class from another class for a hierarchy of classes that share a set of properties and methods
// Help eliminate redundant code
// Polymorphism: Code written to use an interface automatically knows how to work with any number of different objects that provide the interface
// Helps you avoid if/else and switch cases