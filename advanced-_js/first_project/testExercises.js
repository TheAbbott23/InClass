
function add (a,b) {
    return a + b;
}

 function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

// console.log(add(5,6))

// module.exports = {
//     add,subtract,multiply
// };


function isAdult (age) {

    return age>= 18;
    
    // if (age < 18){
    //     return false
    // }
    // else (age >=18) 
    //     return true

};

// module.exports = {
//     isAdult
// };

// console.log(isAdult(19))

function validateNumber (input) {

    let validNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    // return if its a valid number or not by  using var.test for true or false
    return validNumber.test(input)

};

module.exports ={
    validateNumber, isAdult, add, subtract, multiply
};

// zip code is exactly the same just a different regex





