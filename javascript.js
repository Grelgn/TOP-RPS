// get computer choice
function getComputerChoice()
{
    let randomize = Math.floor(Math.random() * 3)
    if (randomize === 0) 
    {
        return "Rock"    
    }
    else if (randomize === 1) 
    {
        return "Paper"    
    }
    else if (randomize === 2) 
    {
        return "Scissors"
    }
}

// get player choice
const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', playRound))

// play round and declare winner
function playRound(e)
{
    let computer = getComputerChoice()
    let player = e.target.textContent

    if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) 
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