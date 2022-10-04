let startButton = document.querySelector("#start-button");
let questionContainer = document.querySelector("#question-container");
let nextButton = document.querySelector("#next-button");

startButton.addEventListener("click", startGame);

function startGame() {
  questionContainer.classList.remove("hide");
  startButton.classList.add("hide");
}

// 1. Player enters game by clicking on start button
// 2. Open a new div with question and choices. An image above appears adjacent to questions.
// 3. Once choice is made, next question populates
// 4. Score is stored
// 5. Percentage of score will be shown on last div visible.

const triviaQuestions = [
  {
    question: "Which president is on the $2 dollar bill?",
    answers: [
      { text: "George Washington", correct: false },
      { text: "Thomas Jefferson", correct: true },
      { text: "James Monroe", correct: false },
      { text: "Grover Cleveland", correct: false },
    ],
  },
];
