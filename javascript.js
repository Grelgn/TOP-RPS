// get computer choice
function getComputerChoice()
{
    let randomize = Math.floor(Math.random() * 3)
    if (randomize === 0) 
    {
        return "rock"    
    }
    else if (randomize === 1) 
    {
        return "paper"    
    }
    else if (randomize === 2) 
    {
        return "scissors"
    }
}
// get player choice
function getPlayerChoice()
{   
    let choice = "NULL"
    do {
        let answer = prompt("Choose: Rock, Paper, Scissors")
        choice = answer.toLowerCase()
    } while (choice != "rock" && choice != "paper" && choice != "scissors");
    
    return choice
}
// play round and declare winner
function playRound()
{
    let computer = getComputerChoice()
    let player = getPlayerChoice()
    
    if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")) 
    {
        return "player"
    }
    else if (player === computer) 
    {
        return "tie"
    }
    else
    {
        return "computer"
    }
}
// play 5 times and keep score to report winner