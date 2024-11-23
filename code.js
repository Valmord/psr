
function getComputerChoice(){
  const choice = Math.floor(Math.random()*3);
  if (choice == 1) return "Rock";
  if (choice == 2) return "Paper";
  return "Scissors";
}

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
    console.log(`Tied with ${player}`);
    return "Tie";
  } else if (
  player === "Rock" && computer === "Scissors" ||
  player === "Scissors" && computer === "Paper" ||
  player === "Paper" && computer === "Rock") {
    console.log(`Player wins! Player:${player} vs Computer:${computer}.`)
    return "Player"
  } else {
    console.log(`Computer wins.. Player:${player} vs Computer:${computer}.`)
    return "Computer"
  }
}

function updateScore(winner){
  if (winner === "Player") playerScore++;
  if (winner === "Computer") computerScore++;
  if (winner === "Tie") ties++;
}

function displayScore(){
  console.log(`Score: Player wins: ${playerScore}, Computer Wins ${computerScore}, Ties ${ties}`);
}

function displayRound(){
  console.log(`Round: ${round}`);
}

function displayWinner(){
  if (playerScore > computerScore) console.log("Player Wins!");
  if (playerScore < computerScore) console.log("Computer wins..");
  if (playerScore === computerScore) console.log("tie...")
}

function game(){
  while (round++ != 5) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    displayRound();
    const winner = playRound(userChoice,computerChoice);
    updateScore(winner);
    displayScore();
  }
  displayWinner();
  console.log("Thanks for playing!");
}

// Game starts here
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let round = 0;

game();