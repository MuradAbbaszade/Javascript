const number = Math.floor(Math.random() * 20) + 1;
console.log(number);
document.querySelector(".check").addEventListener("click", function() {
  const guess = Number(document.querySelector(".guess").value);
  if (guess && guess >= 1 && guess <= 20) {
    if (guess == number) {
      document.querySelector(".message").textContent = "Congrulations!";
      const highscore = Number(document.querySelector(".score").textContent);
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".number").textContent = number;
    } else if (guess < number) {
      document.querySelector(".message").textContent = "Low";
    } else {
      document.querySelector(".message").textContent = "High";
    }
    let score = document.querySelector(".score").textContent;
    let updatedScore = Number(score);
    updatedScore--;
    document.querySelector(".score").textContent = updatedScore;
  } else {
    document.querySelector(".message").textContent = "Invalid number...";
  }
});

document.querySelector(".again").addEventListener("click", function() {
  document.querySelector(".score").textContent = 20;
});
