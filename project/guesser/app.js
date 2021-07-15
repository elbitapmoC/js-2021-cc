/*
  GAME FUNCTION:
  - Player must guess a number between the given Min and Max.
  - Player gets 3 guesses.
  - Guesses update upon each guess/action.
  - Utilize colors to show player if they're getting closer or gurther away.
  - Tell the answer at the end.
  - Allow player to reset the game and start brand new!
  - List all their answers
*/

// Get Values
let min = 1,
  max = 10,
  recentlyPlayed = [],
  winningNum = getRandomInt(),
  guessesLeft = 3;

function getRandomInt() {
  return Math.floor(Math.random() * max) + min;
}

// UI Elements
const game = document.getElementById('game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessInput = document.getElementById('guess-input'),
  submitButton = document.getElementById('guess-submit'),
  message = document.querySelector('.message');

// Assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for submit
submitButton.addEventListener('click', () => {

  // console.log('guessInput.value'); // A String, we want this to be a number so we have to use the function: parseInt.
  let guess = parseInt(guessInput.value);
  console.log(`winningNum: ${winningNum}`);
  if (isNaN(guess) || guess < min || guess > max) {
    updateMessage(`Make sure your input is equal to or between ${min} and ${max}`, 'red');
  }
  else if (guess === winningNum) {
    updateMessage(`GOOD STUFF, ${winningNum} is the correct number!`, 'green');
  } else updateMessage(`${guess}...that won't do, Try again.`, 'red');
})

function updateMessage(alert, color) {
  guessInput.style.borderColor = color;
  message.style.color = color;
  message.textContent = alert;
}