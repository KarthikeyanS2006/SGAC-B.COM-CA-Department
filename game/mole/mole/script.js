const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.getElementById('score');
const timeLeftBoard = document.getElementById('time-left');
const startButton = document.getElementById('start-button');

let lastHole;
let timeUp = false;
let score = 0;
let timeLeft = 30;
let gameTimer;
let alertTriggered = false; // New flag to prevent multiple alerts

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);
  const mole = hole.querySelector('.mole');
  
  hole.classList.add('glow');
  setTimeout(() => {
    hole.classList.remove('glow');
    mole.classList.add('up');
  }, 100);

  setTimeout(() => {
    mole.classList.remove('up');
    if (!timeUp) peep(); // Only continue peeping if time is not up
  }, time);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreBoard.textContent = score;
  timeLeftBoard.textContent = timeLeft;
  timeUp = false;
  alertTriggered = false; // Reset the alert flag
  peep();
  gameTimer = setInterval(() => {
    timeLeft--;
    timeLeftBoard.textContent = timeLeft;
    if (timeLeft <= 0 && !alertTriggered) {
      timeUp = true;
      clearInterval(gameTimer);
      alertTriggered = true; // Set the flag to true after alert is triggered
      alert(`Time's up! Your final score is ${score}.`);
    }
  }, 1000);
}

function whack(e) {
  if (!e.isTrusted) return; // cheater!
  if (!this.classList.contains('up')) return;
  score++;
  this.classList.remove('up');
  this.classList.add('hit');
  setTimeout(() => {
    this.classList.remove('hit');
  }, 300);
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', whack));
startButton.addEventListener('click', startGame);