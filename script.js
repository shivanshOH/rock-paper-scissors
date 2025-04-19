let userScore = 0;
let computerScore = 0;
function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById('user-choice').textContent = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;
  
    let result = "";
  
    if (userChoice === computerChoice) {
      result = "It's a draw!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      result = "You win! 🎉";
      userScore++; // 👈 Increase user score
    } else {
      result = "You lose! 😢";
      computerScore++; // 👈 Increase computer score
    }
  
    // Update result message
    document.getElementById('winner').textContent = result;
  
    // Update scores on the screen
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
  }
  