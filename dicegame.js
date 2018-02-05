function rollDice(numberOfSides) {
	let diceRoll = Math.floor((Math.random() * numberOfSides) + 1);
	return diceRoll;
};

let userBetAmount = prompt("Please enter your betting amount.");
let chooseEvenOrAdd = prompt("Please choose between even or odd.");

function fourSidedDice(){
	let fourSidedDiceArray = [];
	let userNumber = prompt("Enter in the number 4 to roll the four-sided dice.");
	let fourSidedDiceRoll = rollDice(userNumber);
	console.log("You rolled a " + fourSidedDiceRoll+ "! Let's move onto the six-sided dice.");
	return fourSidedDiceRoll;
};
let fourSidedDiceRoll = fourSidedDice();

function sixSidedDice(){
	let userNumber = prompt("Enter in the number 6 to roll the six-sided dice.")
	let sixSidedDiceRoll = rollDice(userNumber);
	console.log("You rolled a " + sixSidedDiceRoll + "! Let's move onto the eight-sided dice.");
	return sixSidedDiceRoll;
};
let sixSidedDiceRoll = sixSidedDice();

function eightSidedDice(){
	let userNumber = prompt("Enter in the number 8 to roll the eight-sided dice.");
	let eightSidedDiceRoll = rollDice(8);
	console.log("You rolled a " + eightSidedDiceRoll + "! Let's move onto the ten-sided dice.");
	return eightSidedDiceRoll;
};
let eightSidedDiceRoll = eightSidedDice();

function tenSidedDice(){
	let userNumber = prompt("Enter in the number 10 to roll the twelve-sided dice.");
	let tenSidedDiceRoll = rollDice(10);
	console.log("You rolled a " + tenSidedDiceRoll + "! Let's move onto the twelve-sided dice.")
	return tenSidedDiceRoll; 
};
let tenSidedDiceRoll = tenSidedDice();

function twelveSidedDice(){
	let userNumber = prompt("Enter in the number 12 to roll the twelve-sided dice.");
	let twelveSidedDiceRoll = rollDice(12);
	console.log("You rolled a " + twelveSidedDiceRoll + "! Let's move onto the twenty-sided dice.");
	return twelveSidedDiceRoll; 
};
let twelveSidedDiceRoll = twelveSidedDice();

function twentySidedDice(){
	let userNumber = prompt("Enter in the number 20 to roll the twenty-sided dice.");
	let twentySidedDiceRoll = rollDice(20);
	console.log("You rolled a " + twentySidedDiceRoll + "! Let's calculate the total of all the dice rolls.");
	return twentySidedDiceRoll;
};
let twentySidedDiceRoll = twentySidedDice();

let sumOfDices = fourSidedDiceRoll + sixSidedDiceRoll + eightSidedDiceRoll + tenSidedDiceRoll + twelveSidedDiceRoll + twentySidedDiceRoll;

if(sumOfDices%2 === 0) {
	console.log("You got a total " + sumOfDices + " , which is even. You win $" + userBetAmount + "!");
}

else {
	console.log("You got a total " + sumOfDices + " , which is odd. You lose $" + userBetAmount + "!");
}