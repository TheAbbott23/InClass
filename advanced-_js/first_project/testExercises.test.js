
const calculations = require("./testExercises");

describe('calculations', ()=> {

    test ('2+2 === 4', ()=>{
        expect(calculations.add(2,2)).toEqual(4);
        expect(calculations.subtract(3,2)).toEqual(1);
        expect(calculations.multiply(2,2)).toEqual(4);
    });
    
});

const ageVerify = require("./testExercises");

describe ('adult validation', ()=>{
    test ("adult or not", ()=>{ 
        expect(ageVerify.isAdult(19)).toEqual(true);
        expect(ageVerify.isAdult(16)).toEqual(false);
    });
});


const phoneNumber = require("./testExercises");

describe ('validate number', ()=> {
    test ('matches phone format', ()=>{
        expect (phoneNumber.validateNumber('3133736261')).toEqual(true);
        expect (phoneNumber.validateNumber('46466')).toEqual(false);
    });
});

///zip code is exacty the same but with a diff regex





