let startButton = document.querySelector(".start-button");
let gameContainer = document.querySelectorAll(".game-container");

startButton.addEventListener("click", newQuestion);

function newQuestion() {
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = `<h3>Which president is on the $2 bill?</h3>
  <p>George Washington</p> <p>Thomas Jefferson</p><p>James Monroe</p><p>Grover Cleveland</p>`;
  document.body.append(questionDiv);
  document.body.classList.remove("start-button");
}

// 1. Player enters game by clicking on start button
// 2. Open a new div with question and choices. An image above appears adjacent to questions.
// 3. Once choice is made, next question populates
// 4. Score is stored
// 5. Percentage of score will be shown on last div visible.
