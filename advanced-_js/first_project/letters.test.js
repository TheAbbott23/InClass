
const listOfVowels = require ('./letters');

describe ("testing for vowels", ()=>{
    test ('return an array of vowels,', ()=> {
        expect (listOfVowels.getVowels('beehive')).toEqual['e', 'e','i', 'e'];
        expect (listOfVowels.getVowels('mlik')).toEqual['i'];
    });
})