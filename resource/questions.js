// creating questions bank


const questions = [{

        "question": "To avoid embarrasing naming mistakes, use _____ case.",
        "option1": "1) Book",
        "option2": "2) Cigarette",
        "option3": "3) Camel",
        "option4": "4) Upper",
        "answer": 3

    },

    {

        "question": "Do things more than once in a JavaScript program with the ____ loop.",
        "option1": "1) If/Else",
        "option2": "2) Do/While",
        "option3": "3) Switch",
        "option4": "4) While",
        "answer": 4

    },

    {

        "question": "All JavaScript statements end with a _____ .",
        "option1": "1) Period",
        "option2": "2) Colon",
        "option3": "3) Semi-Colon",
        "option4": "4) Stop",
        "answer": 3

    },

    {
     
        "question": "To get a true value from an AND (&&) operator, both parts of the conditional must be.",
        "option1": "1) TRUE",
        "option2": "2) FALSE",
        "answer": 1

    },

    {

        "question": "=== is a _____ operator you can use to test to see if two values are the same.",
        "option1": "1) Conditional",
        "option2": "2) Bus",
        "option3": "3) Comparison",
        "option4": "4) Ratio",
        "answer": 3

    },

    {

        "question": "What gets returned from a function without a return statement?.",
        "option1": "1) Reference Error",
        "option2": "2) Undefined",
        "option3": "3) Nothing",
        "option4": "4) Function",
        "answer": 2

    },

    {

        "question": "The variables that arguments land in when they get passed to functions.",
        "option1": "1) Parameters",
        "option2": "2) Arguments",
        "option3": "3) Statements",
        "option4": "4) Functions",
        "answer": 1
    },

    {

        "question": "How do you declare a Variable?.",
        "option1": "1) let name == Danny",
        "option2": "2) let name > Danny",
        "option3": "3) let name = Danny;",
        "option4": "4) name - Danny;",
        "answer": 3
    },

    {

        "question": "What is the output of the following code code console.log('5' + '5') ?.",
        "option1": "1) 10",
        "option2": "2) 5 5",
        "option3": "3) 5",
        "option4": "4) 55",
        "answer": 4
    },

    {

        "question": "How do you display the message on web browser using alert?",
        "option1": "1) alert-'Hello World!'",
        "option2": "2) alert('Hello World!');",
        "option3": "3) display alert('Hello World!');",
        "option4": "4) console.log('Hello World!');",
        "answer": 2
    }


]


//const localStore = JSON.stringify(questions);
//localStorage.setItem('questions', localStore);

const localStore = localStorage.getItem('questions');
const quesObject = JSON.parse(localStore);






