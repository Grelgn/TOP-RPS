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
    else
    {
        return "Scissors"
    }
}

// get player choice
const buttons = document.querySelectorAll('.btn')
buttons.forEach(btn => btn.addEventListener('click', playRound))

// score prerequisite
const result = document.querySelector('.result')
const pScore = document.querySelector('.playerScore')
const tScore = document.querySelector('.tieScore')
const cScore = document.querySelector('.computerScore')
const winner = document.querySelector('.winner')
let pCount = 0, tCount = 0, cCount = 0

// play round and keep score
function playRound(e)
{
    let computer = getComputerChoice()
    let player = e.target.textContent

    if (pCount === 5 || cCount === 5)
    {
        return 0
    }
    
    if ((player === "Rock" && computer === "Scissors") || (player === "Paper" && computer === "Rock") || (player === "Scissors" && computer === "Paper")) 
    {   
        pCount++
        pScore.textContent = pScore.textContent.replace((pCount - 1).toString(), pCount.toString())
        result.textContent = "You Won"
        if (pCount === 5) 
        {
            winner.textContent = "Player Wins!"
        }
    }
    else if (player === computer) 
    {   
        tCount++
        tScore.textContent = tScore.textContent.replace((tCount - 1).toString(), tCount.toString())
        result.textContent = "Tied"
    }
    else
    {
        cCount++
        cScore.textContent = cScore.textContent.replace((cCount - 1).toString(), cCount.toString())
        result.textContent = "You Lost"
        if (cCount === 5)
        {
            winner.textContent = "Computer Wins!"
        }
    }
}