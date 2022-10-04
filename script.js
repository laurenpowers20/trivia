let startButton = document.querySelector("#start-button");
let questionContainer = document.querySelector("#question-container");
let nextButton = document.querySelector("#next-button");
let gameQuestionText = document.getElementById("question-text");
let answerButton = document.querySelectorAll(".answer-button");
let answerMessage = document.querySelector(".answer-message");
let scoreText = document.querySelector(".score");
let score = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", newQuestion);

let index = 0;

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
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "22", correct: false },
      { text: "6", correct: false },
      { text: "4", correct: true },
      { text: "dunno", correct: false },
    ],
  },
  {
    question: "What's the biggest US State?",
    answers: [
      { text: "Texas", correct: false },
      { text: "California", correct: false },
      { text: "New York", correct: false },
      { text: "Alaska", correct: true },
    ],
  },
];

function startGame() {
  questionContainer.classList.remove("hide");
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  newQuestion();
}

function newQuestion() {
  // Add question
  gameQuestionText.innerText = triviaQuestions[index].question;
  // Add choices
  let choiceA = document.querySelector(".A");
  let choiceB = document.querySelector(".B");
  let choiceC = document.querySelector(".C");
  let choiceD = document.querySelector(".D");

  choiceA.innerText = triviaQuestions[index].answers[0].text;
  choiceB.innerText = triviaQuestions[index].answers[1].text;
  choiceC.innerText = triviaQuestions[index].answers[2].text;
  choiceD.innerText = triviaQuestions[index].answers[3].text;

  choiceA.addEventListener("click", (e) =>
    checkAnswer(e, triviaQuestions[index])
  );
  choiceB.addEventListener("click", (e) =>
    checkAnswer(e, triviaQuestions[index])
  );
  choiceC.addEventListener("click", (e) =>
    checkAnswer(e, triviaQuestions[index])
  );
  choiceD.addEventListener("click", (e) =>
    checkAnswer(e, triviaQuestions[index])
  );
  answerMessage.innerText = " ";
}

function getScore() {}
//need correct keys to compare to true and false
//not continue to next question if false.
//
function checkAnswer(e, questionBlock, ...triviaQuestions) {
  console.log(triviaQuestions);
  //console.log(e.target.innerText);
  //console.log(questionBlock);
  let userChoice = questionBlock.answers.find((question) => {
    console.log("question", question);
    return question.text === e.target.innerText;
  });
  console.log("user choice", userChoice);

  if (userChoice.correct) {
    console.log(userChoice);
    score += 10;
    answerMessage.innerText = "Yay! You got it right!";
    scoreText.innerText = score;
  } else {
    answerMessage.innerText = "Sorry you're wrong :(";
  }
  index++;
}

// 1. Player enters game by clicking on start button DONE
// 2. Open a new div with question and choices. DONE
//populate "answers" in buttons DONE
// 3. Once choice is made, next question populates
// 4. Score is stored
// 5. Percentage of score will be shown on last div visible.

// const triviaQuestions = [
//   {
//     question: "Which president is on the $2 dollar bill?",
//     answers: [
//       { text: "George Washington", correct: false },
//       { text: "Thomas Jefferson", correct: true },
//       { text: "James Monroe", correct: false },
//       { text: "Grover Cleveland", correct: false },
//     ],
//   },
//   {
//     question: "What is 2 + 2?",
//     answers: [
//       { text: "22", correct: false },
//       { text: "6", correct: false },
//       { text: "4", correct: true },
//       { text: "dunno", correct: false },
//     ],
//   },
//   {
//     question: "What's the biggest US State?",
//     answers: [
//       { text: "Texas", correct: false },
//       { text: "California", correct: false },
//       { text: "New York", correct: false },
//       { text: "Alaska", correct: true },
//     ],
//   },
// ];

console.log("triviaQuestions", triviaQuestions);
