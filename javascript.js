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
function game()
{
    let player = 0, computer = 0, tie = 0
    while (1) 
    {   
        let winner = playRound()
        if (winner === "player") 
        {
            player++    
        }
        else if (winner === "computer") 
        {
            computer++   
        }
        else
        {
            tie++
        }
        if (player === 5 || computer === 5) 
        {
            break    
        }
    }

    console.log("player: " + player)
    console.log("computer: " + computer)
    console.log("tie: " + tie)
    if (player > computer) 
    {
        console.log("PLAYER WON")
    }
    else if (computer > player) 
    {
        console.log("COMPUTER WON")
    }
    else
    {
        console.log("TIE")
    }
}

game()