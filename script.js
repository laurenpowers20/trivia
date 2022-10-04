let startButton = document.querySelector("#start-button");
let questionContainer = document.querySelector("#game-container");
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

  choiceA.addEventListener(
    "click",
    (e) => {
      checkAnswer(e, triviaQuestions[index]);
    },
    { once: true }
  );
  choiceB.addEventListener(
    "click",
    (e) => {
      checkAnswer(e, triviaQuestions[index]);
    },
    { once: true }
  );
  choiceC.addEventListener(
    "click",
    (e) => {
      checkAnswer(e, triviaQuestions[index]);
    },
    { once: true }
  );
  choiceD.addEventListener(
    "click",
    (e) => {
      checkAnswer(e, triviaQuestions[index]);
    },
    { once: true }
  );
  answerMessage.innerText = " ";
}

function getScore() {}
//need correct keys to compare to true and false
//not continue to next question if false.
//
function checkAnswer(e, questionBlock) {
  // console.log(questionBlock);
  // console.log(triviaQuestions);
  //console.log(e.target.innerText);
  //console.log(questionBlock);
  let userChoice = questionBlock.answers.find((choice) => {
    return choice.text === e.target.innerText;
  });
  // console.log("user choice", userChoice);

  if (userChoice !== undefined) {
    if (userChoice.correct) {
      // console.log(userChoice);
      score += 10;
      answerMessage.innerText = "Yay! You got it right!";
      scoreText.innerText = score;
    } else {
      answerMessage.innerText = "Sorry you're wrong :(";
    }
    index++;
  }
}
