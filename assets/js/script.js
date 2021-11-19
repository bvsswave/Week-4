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

