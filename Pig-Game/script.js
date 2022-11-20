'use strict';
let dice;
let player1TotalScore = 99;
let player2TotalScore = 0;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
const player1Section = document.querySelector('.player--0');
const player2Section = document.querySelector('.player--1');
const player1CurrentScoreElement = document.querySelector('#current--0');
const player2CurrentScoreElement = document.querySelector('#current--1');
const player1TotalScoreElement = document.querySelector('#score--0');
const player2TotalScoreElement = document.querySelector('#score--1');
const dicePng = document.querySelector('img');
const roleDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
let win = false;

const updatePlayerCurrentScoreElement = function(
  playerNumber,
  playerCurrentScore
) {
  if (playerNumber == 1) {
    player1CurrentScoreElement.textContent = playerCurrentScore;
  } else if (playerNumber == 2) {
    player2CurrentScoreElement.textContent = playerCurrentScore;
  } else {
    console.log('Wrong number');
  }
};
const updatePlayerTotalScoreElement = function(playerNumber, playerTotalScore) {
  if (playerNumber == 1) {
    player1TotalScoreElement.textContent = playerTotalScore;
  } else if (playerNumber == 2) {
    player2TotalScoreElement.textContent = playerTotalScore;
  } else {
    console.log('Wrong number');
  }
};
const changeActivePlayer = function(newActivePlayerNumber) {
  if (newActivePlayerNumber == 1) {
    player2Section.classList.remove('player--active');
    player1Section.classList.add('player--active');
  } else if (newActivePlayerNumber == 2) {
    player1Section.classList.remove('player--active');
    player2Section.classList.add('player--active');
  } else {
    console.log('Wrong number');
  }
};
const changeWinnerBackground = function(winnerPlayerNumber) {
  if (winnerPlayerNumber == 1) {
    player1Section.classList.add('player--winner');
    player1Section.classList.add('name');
  } else if (winnerPlayerNumber == 2) {
    player2Section.classList.add('player--winner');
    player2Section.classList.add('name');
  } else {
    console.log('Wrong number');
  }
};
const newGameBackground = function() {
  if (player1Section.classList.contains('player--winner')) {
    player1Section.classList.remove('player--winner');
    player1Section.classList.remove('name');
  } else {
    player2Section.classList.remove('player--winner');
    player2Section.classList.remove('name');
  }
};

roleDiceButton.addEventListener('click', function() {
  if (!win) {
    dice = Math.trunc(Math.random() * 6) + 1;
    dicePng.src = `dice-${dice}.png`;
    dicePng.style.display = 'block';
    if (player1Section.classList.contains('player--active')) {
      if (dice != 1) {
        player1CurrentScore += dice;
        updatePlayerCurrentScoreElement(1, player1CurrentScore);
      } else {
        player1CurrentScore = 0;
        updatePlayerCurrentScoreElement(1, player1CurrentScore);
        changeActivePlayer(2);
      }
    } else {
      if (dice != 1) {
        player2CurrentScore += dice;
        updatePlayerCurrentScoreElement(2, player2CurrentScore);
      } else {
        player2CurrentScore = 0;
        updatePlayerCurrentScoreElement(2, player2CurrentScore);
        changeActivePlayer(1);
      }
    }
  }
});
holdButton.addEventListener('click', function() {
  if (!win) {
    if (player1Section.classList.contains('player--active')) {
      player1TotalScore += player1CurrentScore;
      updatePlayerTotalScoreElement(1, player1TotalScore);
      player1CurrentScore = 0;
      if (player1TotalScore >= 100) {
        win = true;
        changeWinnerBackground(1);
        return;
      }
      updatePlayerCurrentScoreElement(1, player1CurrentScore);
      changeActivePlayer(2);
    } else {
      player2TotalScore += player2CurrentScore;
      updatePlayerTotalScoreElement(2, player2TotalScore);
      player2CurrentScore = 0;
      if (player2TotalScore >= 100) {
        win = true;
        changeWinnerBackground(2);
        return;
      }
      updatePlayerCurrentScoreElement(2, player2CurrentScore);
      changeActivePlayer(1);
    }
  }
});

newGameButton.addEventListener('click', function() {
  dice;
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  updatePlayerCurrentScoreElement(1, 0);
  updatePlayerCurrentScoreElement(2, 0);
  updatePlayerTotalScoreElement(1, 0);
  updatePlayerTotalScoreElement(2, 0);
  dicePng.style.display = 'hidden';
  changeActivePlayer(1);
  newGameBackground();
  win = false;
});
