//function with two parameters, return true or false if letter at the position is a vowel
function isVowel (word, position) {

    const vowels =["a", "e", "i", "o", "u"];

    const letter = word[position].toLowerCase();

   return vowels.includes(letter);

    
}

console.log(isVowel('goof', 3));

//function with one parameter, only accept word with 5 letters, return null if they are bigger or smaller
//return new string wiht the string scrambled according to chart in exercise

function scramble (string) {

    if (string.length !== 5) {
        return null;
    }
    return `${string[2]}${string[3]}${string[0]}${string[1]}${string[4]}`;

}

console.log(scramble("Hello"));



//write function with single parameter. Find all vowels in the word. Return array of vowels

function getVowels(word) {

    const vowelsFound =[];

    for (let i =0; i <word.length; i++){
        if (["a", "e", "i", "o", "u", "y"].includes(word[i])) {
            console.log('yes');
            vowelsFound.push(word[i])
        }
        else {

            console.log('none');
            
        }
    }

    return vowelsFound;
}


 console.log(getVowels('Jaba the Hut'));

//  module.exports = {
//     getVowels
//  }


