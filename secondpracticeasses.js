// function printTens () {
//     for (let i=10; i<=100; i+=10){
//         console.log(i);
//     }
// }
//printTens();

// function countUntilTens (step) {
//     let i =step;
//     while (true) {
//         console.log(i);
        
//         i += step;
//         if (i % 10 === 0){
//             console.log(i);
//             break;

//         }
            
//     }
// }

// //countUntilTens(3);

// function hasVowels (word) {
//     for (let i=0; i <word.length; i++) {
//         console.log(word[i]);
//         if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i'|| word[i] === 'o' || word[i] === 'u') {
//             return true;
//         }
//      }
//      return false;
// }

// //hasVowels

// function testTemperature (desiredTemp, actualTemp) {
//     if (actualTemp < desiredTemp) console.log('Run Heat');
//     else if(actualTemp > desiredTemp) console.log('Run A/C');
//     else console.log('Standby');
// }
// //testTemperature(88,73);

const dealership = [
    {
        make: 'Toyota',
        model: 'Prius',
        year:  2020,
        hybrid: true,
    },
    {
        make: 'Toyota',
        model: 'Prius',
        year:  2021,
        hybrid: true,     
    },
    {
        make: 'Ford',
        model: 'F-150',
        year:  2021,
        hybrid: false,
    },
    {
        make: 'Ferrari',
        model: 'Enzo',
        year:  2004,
        hybrid: false,
    },

];

function findCars (arrayOfCars, model) {
    return arrayOfCars.filter(car => car.model===model);
}

//console.log(findCars(dealership,'Enzo'));  

function addCar (arrayOfCars, make, model, hybrid) {
    const newCar = {make:make,model:model,year:2021,hybrid:hybrid};
    arrayOfCars.unshift(newCar); //unshift instead of push because we want it at the top
}

//addCar(dealership, 'Ford', 'Focus', true);
//console.log(dealership)

function areThereAnyHybridsForSale (arrayOfCars) {
    return arrayOfCars.some(car=>car.hybrid === true);
}

//console.log(areThereAnyHybridsForSale(dealership));



    



