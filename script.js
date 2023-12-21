let playerWon = 0;
let computerWon = 0;
let playerSelection ;
let computerSelection;
let div = document.createElement('div');
document.body.appendChild(div);
let newDiv = document.createElement('div');
let playerStatus = document.createElement('div');
playerStatus.classList.add('playerStatus');
let computerStatus = document.createElement('div');
computerStatus.classList.add('computerStatus');
let resultDiv = document.createElement('div');
resultDiv.classList.add("resultDiv");

let reset = document.createElement('button');
reset.classList.add('reset');
reset.innerHTML="Click to RESET game";
function getComputerChoice()
{
    let choices = ["Rock","Paper","Scissors"];
    let random = (Math.floor(Math.random()*3));
    return choices[random];
}
let buttons = document.querySelectorAll('button');
let arrayButtons = Array.from(buttons);
arrayButtons.forEach(function (button)
{
    button.addEventListener('click',function()
    {
        playerSelection = button.innerText;
        resultDiv.innerText=" ";
        playRound(playerSelection,computerSelection);
        
    })
});
function playRound(playerSelection,computerSelection)
{   
    console.log(typeof(computerStatus));
    div.appendChild(computerStatus);
    div.appendChild(playerStatus);
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    computerSelection =  computerSelection.toUpperCase();
    if(((playerSelection==="ROCK")&&(computerSelection==="SCISSORS"))||((playerSelection==="SCISSORS")&&(computerSelection==="PAPER"))||((playerSelection==="PAPER")&&(computerSelection==="ROCK")))
    {
        ++playerWon; 
        displayResult();
        newDiv.textContent=`You win, ${playerSelection} beats ${computerSelection}`;
    }
    else if(((playerSelection==="SCISSORS")&&(computerSelection==="ROCK"))||((playerSelection==="PAPER")&&(computerSelection==="SCISSORS"))||((playerSelection==="ROCK")&&(computerSelection==="PAPER")))
    {        
        ++computerWon;
        displayResult();
        newDiv.textContent=`You lose, ${computerSelection} beats ${playerSelection}`;
    }
    else if(((playerSelection==="SCISSORS")&&(computerSelection==="SCISSORS"))||((playerSelection==="PAPER")&&(computerSelection==="PAPER"))||((playerSelection==="ROCK")&&(computerSelection==="ROCK")))
    {
        displayResult();
        newDiv.textContent="Its a tie";
    }
    function displayResult()
    {
        newDiv.classList.add('newDiv');
        div.appendChild(newDiv);
        computerStatus.innerText = `Computer : ${computerWon}`;
        playerStatus.innerText = `Player : ${playerWon}`;
    }

    function setResult()
    {
       // document.body.appendChild(reset);
       computerStatus.innerText = "Computer : 0";
       computerWon=0;
       // computerStatus="";
        playerStatus.innerText = "Player : 0";
        playerWon=0;
      //  playerStatus="";
        newDiv.textContent="";
    }
    if(playerWon===5||computerWon===5)
    {
    document.body.appendChild(resultDiv);
    if(playerWon>computerWon)
    {
        setResult();
        resultDiv.innerText="Player won";     
    }
    else if(playerWon<computerWon)
    {
        setResult();
        resultDiv.innerText="Computer won";
    }
    else{
        setResult();
        resultDiv.innerText="Its a tie";
    }
}
}

