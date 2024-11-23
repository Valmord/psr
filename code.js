
function getComputerChoice(){
  const choice = Math.floor(Math.random()*3);
  if (choice == 1) return "Rock";
  if (choice == 2) return "Paper";
  return "Scissors";
}

console.log(getComputerChoice());

function getUserChoice(){
  let userChoice = "";
  while(true) {
    userChoice = prompt("Enter rock, paper or scissors");
    userChoice = userChoice.toLowerCase();
    if (userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors") {
      return userChoice[0].toUpperCase() + userChoice.slice(1);
    }
  }
}

function playRound(player,computer){
  if (player === computer) {
    console.log(`Tie with ${player}'s`);
  } else if (
  player === "Rock" && computer === "Scissors" ||
  player === "Scissors" && computer === "Paper" ||
  player === "Paper" && computer === "Rock") {
    console.log(`Player wins! Player:${player} vs Computer:${computer}.`)
  } else {
    console.log(`Computer wins.. Player:${player} vs Computer:${computer}.`)
  }
}

function game(){
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  playRound(userChoice,computerChoice);
}

// Game starts here
let playerScore = 0;
let computerScore = 0;
let ties = 0;

game();