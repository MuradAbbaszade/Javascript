'use strict';
let dice;
let totalScore = 0;
let currentScore = 0;
let activePlayer = 0;
const dicePng = document.querySelector('img');
const roleDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
let win = false;

const changePlayer = function(activePlayer) {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = activePlayer ? 0 : 1;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  return activePlayer;
};

roleDiceButton.addEventListener('click', function() {
  if (!win) {
    dice = Math.trunc(Math.random() * 6) + 1;
    dicePng.src = `dice-${dice}.png`;
    dicePng.style.display = 'block';
    if (dice != 1) {
      currentScore += dice;
      document.querySelector(
        `#current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = changePlayer(activePlayer);
    }
  }
});

holdButton.addEventListener('click', function() {
  if (!win) {
    totalScore = Number(
      document.querySelector(`#score--${activePlayer}`).textContent
    );
    totalScore += currentScore;
    currentScore = 0;
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    if (totalScore >= 100) {
      win = true;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      return;
    }
    activePlayer = changePlayer(activePlayer);
  }
});

newGameButton.addEventListener('click', function() {
  dice;
  currentScore = 0;
  totalScore = 0;
  if (activePlayer) changePlayer(activePlayer);
  dicePng.style.display = 'hidden';
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  win = false;
});
