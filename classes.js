// class Student {

//     name;
//     age;


//     constructor (constructorName, constructorAge) {
//         this.name = constructorName;
//         this.age = constructorAge;

//     }
// }

// const matt = new Student('Matt', 39);

// console.log(matt.age) //for just matts age

    
// class Skier {

//     skiSize;
//     bootSize;

    
// }

// function fall () {
//      console.log('you fell!')
// }

// const Lex = newSkier;

// Lex.skiSize = 150;
// Lex.bootSize = 8;

// Lex.fall();

//console.log(Lex)

class Vehicle {
    make;
    model;
    numberOfWheels;
    needsService;

    constructor(make,model,type,miles) {
        this.make = make;
        this.model = model;
        this.numberOfWheels = type === 'car' ? 4 :2;
        this.needsService = miles > 20000;
    }
}
const harley = newVehicle('Harley', 'Road King', 'motorcycle', 25000);

console.log(harley)


