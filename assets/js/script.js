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
        question: "",
        choices: [""]
        answer: "",
    },
{
    question: "",
        choices: [""]
        answer: "",
}
{
    question: "",
    choices: [""]
    answer: "",
}

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
        // Stop timer at 0
        clearInterval(timeInt);
        // End the quiz
        gameOver();
    }
}