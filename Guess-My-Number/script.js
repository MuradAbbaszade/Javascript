let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let win = false;
let highscore = 0;
let message = "";
const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
};
console.log(number);
document.querySelector(".check").addEventListener("click", function() {
  if (!win) {
    const guess = Number(document.querySelector(".guess").value);
    if (guess && guess >= 1 && guess <= 20) {
      if (guess == number) {
        win = true;
        displayMessage("Congrulations!");
        if (highscore < score) {
          highscore = score;
          document.querySelector(".highscore").textContent = score;
        }
        document.querySelector(".number").textContent = number;
        document.querySelector("body").style.backgroundColor = "#60b347";
        return;
      } else if (guess != number) {
        if (score > 0) {
          score--;
          message = guess > number ? "Too high!" : "To low!";
          document.querySelector(".score").textContent = score;
        } else {
          message = "Losing...";
        }
      }
    } else {
      message = "Invalid number...";
    }
    displayMessage(message);
  }
});

document.querySelector(".again").addEventListener("click", function() {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
});
