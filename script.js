let score = 0;
let scoreDisplay = document.getElementById('score');
let clickButton = document.getElementById('click-button');
let message = document.getElementById('message');
let timerDisplay = document.getElementById('timer');
let themeToggle = document.getElementById('theme-toggle');

let timeLeft = 30; // seconds
let timerId = null;
let timerRunning = false;

// Function to update the timer display
function updateTimer() {
  timerDisplay.textContent = 'Time: ' + timeLeft + 's';
}

// Function to handle timer countdown
function startTimer() {
  if (timerRunning) return;
  timerRunning = true;
  timerId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      clickButton.disabled = true;
      message.textContent = 'Time is up! Your final score is ' + score + '.';
    }
  }, 1000);
}

// Click event handler
clickButton.addEventListener('click', function() {
  if (!timerRunning) {
    startTimer();
  }
  score++;
  scoreDisplay.textContent = 'Score: ' + score;

  // Display message when the score reaches certain thresholds
  if (score === 10) {
    message.textContent = 'Great job! You have reached 10 points!';
  } else if (score === 50) {
    message.textContent = 'Amazing! 50 points!';
  } else if (score === 100) {
    message.textContent = 'Unbelievable! 100 points!';
  } else {
    message.textContent = '';
  }
});

// Theme toggle event handler
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});
