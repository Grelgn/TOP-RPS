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
// play round and declare winner
// play 5 times and keep score to report winner