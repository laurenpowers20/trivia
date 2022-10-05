let startButton = document.querySelector("#start-button");
let questionContainer = document.querySelector("#game-container");
let nextButton = document.querySelector("#next-button");
let gameQuestionText = document.getElementById("question-text");
let answerButton = document.querySelectorAll(".answer-button");
let answerMessage = document.querySelector(".answer-message");
let scoreText = document.querySelector(".score");
let finalScore = document.querySelector(".final-score");
let title = document.querySelector(".title");
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
  {
    question: "What is the answer?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
      { text: "No", correct: false },
      { text: "No", correct: false },
    ],
  },
  {
    question: "Choose the number 1",
    answers: [
      { text: "four", correct: false },
      { text: "Six", correct: false },
      { text: "One", correct: true },
      { text: "Ten", correct: false },
    ],
  },
  {
    question: "What color is the sky?",
    answers: [
      { text: "Purple", correct: false },
      { text: "Blue", correct: true },
      { text: "Pink", correct: false },
      { text: "Brown", correct: false },
    ],
  },
  {
    question: "What is tall?",
    answers: [
      { text: "Yes", correct: false },
      { text: "No", correct: false },
      { text: "Giraffe", correct: true },
      { text: "No", correct: false },
    ],
  },
  {
    question: "What is the answer?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
      { text: "No", correct: false },
      { text: "No", correct: false },
    ],
  },
  {
    question: "Is this correct?",
    answers: [
      { text: "No", correct: false },
      { text: "No", correct: false },
      { text: "No", correct: false },
      { text: "Yes", correct: true },
    ],
  },
  {
    question: "What has stripes?",
    answers: [
      { text: "Tiger", correct: true },
      { text: "No", correct: false },
      { text: "No", correct: false },
      { text: "No", correct: false },
    ],
  },
];

function startGame() {
  questionContainer.classList.remove("hide");
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  title.classList.add("hide");
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

function checkAnswer(e, questionBlock) {
  // console.log(questionBlock);
  // console.log(triviaQuestions);
  //console.log(e.target.innerText);
  //console.log(questionBlock);
  let userChoice = questionBlock.answers.find((choice) => {
    return choice.text === e.target.innerText;
  });

  if (userChoice !== undefined) {
    if (userChoice.correct) {
      console.log(userChoice);
      score += 10;
      answerMessage.innerText = "Correct!";
      scoreText.innerText = `${score} points`;
    } else {
      answerMessage.innerText = "Sorry, that's incorrect.";
    }
    index++;
    // console.log(index);
    if (index > 9) {
      finalScore.innerText = `Final Score: ${score}%!`;
      questionContainer.classList.add("hide");
      scoreText.classList.add("hide");
    } else {
      //console.log("keep playing");
    }
  }
}
