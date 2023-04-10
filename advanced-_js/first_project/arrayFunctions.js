
function findLargest (numbers) {
    let largest = numbers[0];
    for (let number of numbers) {
        if (largest < number) {
            largest = number;
        }
    }
    return largest
    
    };

    

console.log(findLargest([2,6,35]));



const arrayOfNames = ['Jenna, Kate, Shelby, Jeremy '];

function printListOfNames(names) {
    let listOfNames = "";
    for (let name of names) {
        listOfNames = `${listOfNames}${name}`; //string interpolation
    }

    return listOfNames;
}

//  console.log(printListOfNames(arrayOfNames));

// module.exports ={
//     printListOfNames
// }




