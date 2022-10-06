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
    question: "Which of these planets has no moons?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: false },
      { text: "Saturn", correct: false },
      { text: "Mercury", correct: true },
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
    question: "Which of these countries is an enclave?",
    answers: [
      { text: "Lesotho", correct: true },
      { text: "Monaco", correct: false },
      { text: "Singapore", correct: false },
      { text: "Laos", correct: false },
    ],
  },
  {
    question: "What currency is used in Thailand?",
    answers: [
      { text: "Thai Dollars", correct: false },
      { text: "Thai Kip", correct: false },
      { text: "Thai Baht", correct: true },
      { text: "Thai Dong", correct: false },
    ],
  },
  {
    question: "Which of these South American countries are land locked?",
    answers: [
      { text: "Ecuador", correct: false },
      { text: "Paraguay", correct: true },
      { text: "Peru", correct: false },
      { text: "Colombia", correct: false },
    ],
  },
  {
    question: "Who is Calvin Cordozar Broadus Jr?",
    answers: [
      { text: "Snoop Dogg", correct: true },
      { text: "Nate Dogg", correct: false },
      { text: "Ice Cube", correct: false },
      { text: "Ol' Dirty Bastard", correct: false },
    ],
  },
  {
    question: "What is a baby hedgehog called?",
    answers: [
      { text: "Hogwarts", correct: false },
      { text: "Hoggle", correct: false },
      { text: "Hoglet", correct: true },
      { text: "Pup", correct: false },
    ],
  },
  {
    question:
      "Who was the first woman ever inducted into the Rock and Roll Hall of Fame??",
    answers: [
      { text: "Aretha Franklin", correct: true },
      { text: "Stevie Nicks", correct: false },
      { text: "Joan Jett", correct: false },
      { text: "Alanis Morrisette", correct: false },
    ],
  },
  {
    question: "The Wu-Tang Clan recommends protecting which body part?",
    answers: [
      { text: "Your hair", correct: false },
      { text: "Your face", correct: false },
      { text: "Your behind", correct: false },
      { text: "Your neck", correct: true },
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
  gameQuestionText.innerText = triviaQuestions[index].question;
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
      //console.log(userChoice);
      score += 10;
      answerMessage.innerText = "Correct!";
      scoreText.innerText = `${score}%`;
    } else {
      answerMessage.innerText = "Sorry, that's incorrect.";
    }
    index++;
    //console.log(index);
    if (index >= 10) {
      finalScore.innerText = `Final Score: ${score}%!`;
      questionContainer.classList.add("hide");
      scoreText.classList.add("hide");
    } else {
      //console.log("keep playing");
    }
  }
}
