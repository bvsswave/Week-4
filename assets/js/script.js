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
        questionsDiv.textContent = userQuestions;
    }

    userChoices.forEach(function (newItem) {
        varlistItem = document.createElement("li");
        listItem.textContent = newitem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })

}
// event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // correct condition
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDivDiv.textContent = "Correct! The answer is: " + questions[questionIndex].answer;
            // correct condition
        } else {
            // will deduct -5 seconds off second Left for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textcontent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
        }
            render(questionsIndex);
    }
    questionsDiv.appendChild(createDiv);

    // append last page
    function allDone() {
        questionsDiv.innerHTML = "";
        currentTime.innerHTML = "";

        // heading:
        var createH1 = document.createElement("h1");
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "All Done!"
        
        questionsDiv.appendChild(createH1);

        // paragraph
        var creatP = document.createElement("p");
        createImageBitmap.setAttribute("id", "createP");

        questionsDiv.appendChild(createP);

        // calculates time remaining and replaces it with score
        if (secondLeft >= 0) {
            var timeremaining = secondsLeft;
            var createP2 = document.createElement("p");
            clearInterval(holdInterval);
            createP.textContent = "Your final score is: " + timeremaining;

            questionsDiv. appendChild(createP2);
        }
        // label
        var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";

        questionsDiv.appendChild(createLabel);

        // input
        var createInput = document.createElement("input");
        createInput.setAttribute("type", "text");
        createInput.setAttribute("id", "initials");
        createInput.textcontent = "";

        questionsDiv.appendChild(creatInput);

        // submit
        var createSubmit = document.createElement("button");
        createSubmit.setAttribute("type", "submit");
        createSubmit.setAttribute("id", "Submit");
        createSubmit.textcontent = "Submit";

        questionsDiv.appendChild(createSubmit);

    }

}

