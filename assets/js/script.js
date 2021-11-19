// questions
var questions = [
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

// declared variables
var score = 0;
var questionIndex = 0;

// working code
// declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var qeustionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// seconds left is 15 seconds per question:
var secondsLeft = 45
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
        }
        render(questionIndex);
    });

function render(questionIndex) {
    // clears existing data
    qeustionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // for looops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChocies = questions[questionIndex].choices;
        qeustionsDiv.textContent = userQuestions;
    }
}

