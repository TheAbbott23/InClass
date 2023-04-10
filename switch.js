



const prompt = require("prompt-sync") ();

const howMuchMoney = +prompt("What is the total amount?");
const state = prompt("What state do you live in?");


switch (state) {
    case "MI":
        console.log(howMuchMoney + (howMuchMoney * 0.06));
        break;       
    case "OH":
    console.log(howMuchMoney + (howMuchMoney * 0.06));
        break;
    
}
