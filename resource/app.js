//initialize question count which is zero upon begiining of each quiz set
let questionCount = 0;
// initiliaze score which is zero at the beginning
let score = 0;
// initiliaze answer 
let ans = 0;
// initialize random number so the test opens with different questions each time the user retake the quiz
let rand;
// initliaze record so the question changes and shuffles
let record = [];
// initiliaze status so the loop creates new question everytime, hold the status of random mnumber
let status = 0;

// create a function that will retrieve all the necessary elements in html to access the DOM and save typing repitition of query selector
function id(element) {

    return document.getElementById(element);
}

let quizApp = id("quizapp");
let quizBegin = id("quiz");
let startButton = id("startbutton");
let quizSet = id("quizset");
let question = id("question");
let option1 = id("option1");
let option2 = id("option2");
let option3 = id("option3");
let option4 = id("option4");
let submit = id("submit");
let progress = id("progress");
let result = id("result");
let resultBox = id("resultbox");
let retake = id("retake");
let button1 = id("btn1");
let button2 = id("btn2");
let button3 = id("btn3");
let button4 = id("btn4");

let tracker;


// adding an event listener so when the user click the start button on welcome screen, the quiz app will load.
startButton.addEventListener("click", () => {

    quizBegin.style.display = "none";
    quizApp.style.display = "block";
    const localStore = JSON.stringify(questions);
    localStorage.setItem('questions', localStore);
    alert("If the questions are not loaded properly, Please refresh the page and the App should work !!!!!!");
    


});

const localStore = localStorage.getItem('questions');
const quesObject = JSON.parse(localStore);

// Loading the Questions set into the app
function setQuestion(qCount, rand) {

    let ques = quesObject[rand];
    
    question.textContent = (qCount+1) + ". " + ques.question;
    option1.textContent = ques.option1;
    option2.textContent = ques.option2;
    option3.textContent = ques.option3;
    option4.textContent = ques.option4;

}
// this function change the question tracker based on the question number plus it changes the color of that tracker 
// also it update the progress bar at the bottom of quiz app to let the user know which question they are currently on
function changeProgressBar(qCount) {

    progress.innerHTML = "Question " + (qCount+1) + " of 10";
    tracker = id("num" + (qCount+1));
    tracker.style.backgroundColor = "orange";

}

// this function changes the option button color back to normal once the user select the next question, resetting the option buttons color.
function defaultButtonColor() {

    button1.style.backgroundColor = "black";
    button2.style.backgroundColor = "black";
    button3.style.backgroundColor = "black";
    button4.style.backgroundColor = "black";

}

// this function calls multiple functions within based on the condition, it sets the question into the app, change progress bar if it is on the last question and finally change the option button color.
function getQuestions(qCount, rand) {

    if (qCount === 9) {

        submit.innerHTML = "Submit Test";
        submit.style.backgroundColor = "blue";

    } else if (qCount > 9) {

        return;
    } 

    setQuestion(qCount, rand);
    changeProgressBar(qCount);
    defaultButtonColor();
    
}
// this function store correct answers record
function setCorrect() {

    score++;
    tracker.style.backgroundColor = "green";

}
// this function stores the wrong answer record
function wrongAnswer() {

    tracker.style.backgroundColor = "red";

}
// this function calculate and displays the final score after the submit button is clicked with the appropriate message based on the score.
function finalScore() {

    score = (score / 10) * 100;

    if (score >= 70) {

        result.innerHTML = "Congratulation!! you have passed the test. <br/> Your Final Score is " + score + "%.";

    } else if (score < 70) {

        result.innerHTML = "Sorry :( you have failed. <br/> You Final Score is " + score + "%.";
    }

}
// this function hides the question set and display the result screen after the submit button.
function setResultPage() {

    quizSet.style.display = "none";
    resultBox.style.display = "block";
    progress.innerHTML = "Quiz Completed";

    finalScore();


}
// this function is a random question generator which make sure that the same questions are not repeating after user clicked retake or refresh the app
function randomGen() {

    while(status === 0) {

        rand = Math.round(Math.random() * quesObject.length);
        
        if (rand !== quesObject.length) {
            for (i = 0; i<record.length; i++) {
                if (rand === record[i]) {
                    break;
                } else if (i === record.length -1) {
                    record[questionCount] = rand;
                    status = 1;
                }
            }
        }
    }

    status = 0;
    return rand;

}


option1.addEventListener("click", optionSelect);
option2.addEventListener("click", optionSelect);
option3.addEventListener("click", optionSelect);
option4.addEventListener("click", optionSelect);

function optionSelect(e) {

    let parentElem = e.target.parentElement;
    parentElem.style.backgroundColor = "rgb(104, 166, 238)";


    switch(e.target.id) {

        case "option1": button2.style.backgroundColor = "black";
                        button3.style.backgroundColor = "black";
                        button4.style.backgroundColor = "black";
                        break;
        
        case "option2": button1.style.backgroundColor = "black";
                        button3.style.backgroundColor = "black";
                        button4.style.backgroundColor = "black";
                        break;

        case "option3": button1.style.backgroundColor = "black";
                        button2.style.backgroundColor = "black";
                        button4.style.backgroundColor = "black";
                        break;

        case "option4": button1.style.backgroundColor = "black";
                        button2.style.backgroundColor = "black";
                        button3.style.backgroundColor = "black";
                        break;
    
    }

    ans = parseInt(e.target.id.replace("option", ""), 10);

}

// this function checks to see if user select an option if not then it sends alert message and also calling setcorrect and setwrong function based on the answer
submit.addEventListener("click", nextQuestion);

function nextQuestion() {


    
    
    // no option is selected
    if (button1.style.backgroundColor !== "rgb(104, 166, 238)" && 
        button2.style.backgroundColor !== "rgb(104, 166, 238)" &&
        button3.style.backgroundColor !== "rgb(104, 166, 238)" &&
        button4.style.backgroundColor !== "rgb(104, 166, 238)") {

            alert("Please select an option");
            return;
           
        } if (questionCount === 9 && questionCount !== 10) {

            if (ans === quesObject[rand].answer) {

                setCorrect();

            } else {

                wrongAnswer();
            }

            setResultPage();
            return;

        }
        
        
            
        if (ans === quesObject[rand].answer) {

            setCorrect();
            getQuestions(++questionCount, randomGen());
            
        } else {

            wrongAnswer();
            getQuestions(++questionCount, randomGen());
            
        }

    
        
}

retake.addEventListener("click", retakeTest);

function retakeTest() {

    window.location.reload();

}
// A random question generator
rand = Math.round(Math.random() * quesObject.length);
while(rand === quesObject.length) {

rand = Math.round(Math.random() * quesObject.length);

}



record[0] = rand;

//onload function
window.onload = getQuestions(questionCount, rand);
