let playerWon = 0;
let computerWon = 0;
function getComputerChoice()
{
    let choices = ["Rock","Paper","Scissors"];
    let random = (Math.floor(Math.random()*3));
    return choices[random];
}
function playRound(playerSelection,computerSelection)
{   
    
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    computerSelection =  computerSelection.toUpperCase();
    if(((playerSelection==="ROCK")&&(computerSelection==="SCISSORS"))||((playerSelection==="SCISSORS")&&(computerSelection==="PAPER"))||((playerSelection==="PAPER")&&(computerSelection==="ROCK")))
    {
        playerWon++;
        return `You win, ${playerSelection} beats ${computerSelection}`;
    }
    else if(((playerSelection==="SCISSORS")&&(computerSelection==="ROCK"))||((playerSelection==="PAPER")&&(computerSelection==="SCISSORS"))||((playerSelection==="ROCK")&&(computerSelection==="PAPER")))
    {        
        computerWon++;
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
    else if(((playerSelection==="SCISSORS")&&(computerSelection==="SCISSORS"))||((playerSelection==="PAPER")&&(computerSelection==="PAPER"))||((playerSelection==="ROCK")&&(computerSelection==="ROCK")))
    {
        return "Its a tie";
    }
}
let playerSelection = prompt("May I know your selection","Rock,Paper,Scissors");
let computerSelection;
function game()
{

    for(i=0;i<5;i++)
    {
        playRound(playerSelection,computerSelection);
    }
    if(playerWon>computerWon)
    {
        return "Player won";
    }
    else if(playerWon<computerWon)
    {
        return "Computer Won";
    }
    else{
        return " its a tie";
    }
}
console.log(game());