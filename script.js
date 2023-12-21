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

function getComputerChoice()                // a function to choose a random value from the array of choices
{
    let choices = ["Rock","Paper","Scissors"];
    let random = (Math.floor(Math.random()*3));
    return choices[random];
}

let buttons = document.querySelectorAll('button');
let arrayButtons = Array.from(buttons);
arrayButtons.forEach(function (button)    // loops through each of the buttons and await for a click from any of the buttons
{
    button.addEventListener('click',function()
    {
        playerSelection = button.innerText;
        resultDiv.innerText=" ";
        playRound(playerSelection,computerSelection);      
    })
});
function playRound(playerSelection,computerSelection)  // a function to play one round of rock-paper-scissors where the Player selected value and computer selected value is checked and the result is drawn
{     
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
       computerStatus.innerText = "Computer : 0";
       computerWon=0;
        playerStatus.innerText = "Player : 0";
        playerWon=0;
        newDiv.textContent="";
    }
    if(playerWon===5||computerWon===5)      // checks whether 5 rounds are played and the winner is displayed
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

