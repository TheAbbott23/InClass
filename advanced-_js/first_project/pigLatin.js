
function translate(str) {

    str=str.toLowerCase();

    //words starting with vowel:
    if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
        return str = str +"way"; //concatenate
    } else {
        return "Nope"
    }
    
};

module.exports = {
    translate
}

// console.log(translate("only"));


