var readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.bold.magenta('Hello world!'));
var userName = readlineSync.question("Hey friend, what's your name? \n");
console.log(chalk("Welcome! ", userName,". "));

var score = 0;

var highScore = [{

    name: "abc",
    inScore : 10
},{
    name: "xyz",
    inScore: 7,
}

]

// Questions and answers
var qna = [
    {
        question: "Who is my favorite cousin? ",
        answer: "indian",
    },
    {
        question: "What am I studying right now?",
        answer: "engineering"
    },
    {
        question: "Do you like coffee?",
        answer: "yes"
    }
]
function game(question, answer){

    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log("YAY you did it!"),
        score++;
        console.log(score);
    }else{
        console.log("Oops! Let's hang out soon.")
        score--;
        console.log(score);
    }
}

for(var i =0; i<qna.length;i++){
    game(qna[i].question, qna[i].answer);
}
console.log("Your final Score is", score);


for(var i = 0; i<highScore.length;i++){
    console.log(highScore[i].name," : ", highScore[i].inScore);
}