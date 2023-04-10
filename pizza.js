const prompt = require("prompt-sync")({ sigint: true });

const size = prompt("What size pizza would you like? ");
const pepperoni = prompt("Do you want pepperoni? [Y/N] ");
const delivery = prompt("Do you need delivery? [Y/N] ");

let total = 0;

if (size === "S") {
	total += 5;
} else if (size === "M") {
	total += 6;
} else if (size === "L") {
	total += 7;
} else if (size === "XL") {
	total += 8;
} else {
	console.log('Enter a valid size');
}

switch (size) {
	case "S":
		total += 5;
		break;
	case 'M':
		total += 6;
		break;
	case 'L':
		total += 7;
		break;
	case 'XL':
		total += 8;
		break;
	default:
		console.log('Enter a valid size')
}

if (pepperoni === "Y") {
	total += 2;
}

if (delivery === "Y") {
	total += 10;
}

total = (total + (total * 0.06));

console.log(total);




// Ask the user for a total amount of money
// ask them for what state they are in
// Michigan 0.06
// Ohio 0.05
// Delaware 0
// CA 0.07

// compute sales tax