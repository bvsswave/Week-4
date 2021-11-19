var startPageEl = document.getElementById("start-page");
var qaPageEl = document.getElementById("qa-page");
var resultsEl = document.getElementById("results");
var startbuttonEl = doucment.getElementById("start-btn");
var submitButtonEl = document.getElementById("submit-btn");
var timerEl = document.getElementById("time");
var initialsEl = document.querySelector("#initials");
var resultsDivEl = document.getElementById("results");
var saveScoreEl = document.getElementById("submit-btn");
var playerScoreEl = document.getElementById("player-score");

var clock = 30;
var currentQuestionIndex = 0;
var playerScore = 0;
var timeInt;
var quizList = [
    // questions
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<scripting>", "<script>", "<js>"],
        answer: "<script>",
    },
{
    question: "Where is the correct place to insert JavaScript?",
        choices: ["The <body> section", "The <head> section", "Both the <head>section and the <body section are correct"],
        answer: "Both the <head>section and the <body section are correct",
},

{
    question: "The external JavaScrpt file must contain the <script> tag",
    choices: ["True", "False"],
    answer: "False",
},
];

function startGame() {
    startPageEl.setAttribute("class", "hide");
    qaPageEl.setAttribute("class", "show");
    timerEl.textContent = clock;
    timeInt = setInterval(counDown, 1000);
    displayQa();
}

function countDown () {
    clock--;
    timerEl.textContent = clock;
    if (clock <= 0) {
        clearInterval(timeInt);
        gameOver();
    }
}