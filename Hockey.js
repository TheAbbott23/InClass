const prompt =require('prompt-sync')();

function getRandomDirection() {
    return Math.random() < 0.5 ? "high" : "low";
}
function shoot (player) {


const answer = prompt(`Player ${player}, high or low?`);

if (answer.toLowerCase() === getRandomDirection()) {
    console.log("GOAL!");
}
else{
    console.log ("Missed!");
}
}

const numberOfPlayers = +prompt ("How many players in the shootout?");

for (i=1; i<=numberOfPlayers; i++){
    shoot(i);
}

















