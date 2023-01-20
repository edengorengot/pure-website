/* this is the quiz file */

// basic setup

const quizScore = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var scoreSum = 0;

var myScore = document.getElementById('myScore');
myScore.innerText = scoreSum;

function fullScore () {
    scoreSum = quizScore.reduce((total, perQuestion) => {
        return total + perQuestion;
    });
}





// question 1 *********************************************************************

var q1a1 = document.getElementById('q1a1');
var q1a2 = document.getElementById('q1a2');
var q1a3 = document.getElementById('q1a3');
var q1a4 = document.getElementById('q1a4');

q1a1.addEventListener("click", question1Option1);
q1a2.addEventListener("click", question1Option2);
q1a3.addEventListener("click", question1Option3);
q1a4.addEventListener("click", question1Option4);



function question1Option1() {
    q1a1.style.borderColor = "red";
    quizScore[0] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question1Option2() {
    q1a2.style.borderColor = "green";
    quizScore[0] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question1Option3() {
    q1a3.style.borderColor = "red";
    quizScore[0] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question1Option4() {
    q1a4.style.borderColor = "red";
    quizScore[0] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}



// question 2 *********************************************************************

var q2a1 = document.getElementById('q2a1');
var q2a2 = document.getElementById('q2a2');
var q2a3 = document.getElementById('q2a3');
var q2a4 = document.getElementById('q2a4');

q2a1.addEventListener("click", question2Option1);
q2a2.addEventListener("click", question2Option2);
q2a3.addEventListener("click", question2Option3);
q2a4.addEventListener("click", question2Option4);



function question2Option1() {
    q2a1.style.borderColor = "red";
    quizScore[1] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question2Option2() {
    q2a2.style.borderColor = "red";
    quizScore[1] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question2Option3() {
    q2a3.style.borderColor = "green";
    quizScore[1] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question2Option4() {
    q2a4.style.borderColor = "red";
    quizScore[1] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 3 *********************************************************************

var q3a1 = document.getElementById('q3a1');
var q3a2 = document.getElementById('q3a2');
var q3a3 = document.getElementById('q3a3');
var q3a4 = document.getElementById('q3a4');

q3a1.addEventListener("click", question3Option1);
q3a2.addEventListener("click", question3Option2);
q3a3.addEventListener("click", question3Option3);
q3a4.addEventListener("click", question3Option4);



function question3Option1() {
    q3a1.style.borderColor = "green";
    quizScore[2] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question3Option2() {
    q3a2.style.borderColor = "red";
    quizScore[2] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question3Option3() {
    q3a3.style.borderColor = "red";
    quizScore[2] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question3Option4() {
    q3a4.style.borderColor = "red";
    quizScore[2] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 4 *********************************************************************

var q4a1 = document.getElementById('q4a1');
var q4a2 = document.getElementById('q4a2');
var q4a3 = document.getElementById('q4a3');
var q4a4 = document.getElementById('q4a4');

q4a1.addEventListener("click", question4Option1);
q4a2.addEventListener("click", question4Option2);
q4a3.addEventListener("click", question4Option3);
q4a4.addEventListener("click", question4Option4);



function question4Option1() {
    q4a1.style.borderColor = "red";
    quizScore[3] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question4Option2() {
    q4a2.style.borderColor = "red";
    quizScore[3] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question4Option3() {
    q4a3.style.borderColor = "red";
    quizScore[3] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question4Option4() {
    q4a4.style.borderColor = "green";
    quizScore[3] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 5 *********************************************************************

var q5a1 = document.getElementById('q5a1');
var q5a2 = document.getElementById('q5a2');
var q5a3 = document.getElementById('q5a3');
var q5a4 = document.getElementById('q5a4');

q5a1.addEventListener("click", question5Option1);
q5a2.addEventListener("click", question5Option2);
q5a3.addEventListener("click", question5Option3);
q5a4.addEventListener("click", question5Option4);



function question5Option1() {
    q5a1.style.borderColor = "red";
    quizScore[4] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question5Option2() {
    q5a2.style.borderColor = "red";
    quizScore[4] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question5Option3() {
    q5a3.style.borderColor = "green";
    quizScore[4] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question5Option4() {
    q5a4.style.borderColor = "red";
    quizScore[4] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 6 *********************************************************************

var q6a1 = document.getElementById('q6a1');
var q6a2 = document.getElementById('q6a2');
var q6a3 = document.getElementById('q6a3');
var q6a4 = document.getElementById('q6a4');

q6a1.addEventListener("click", question6Option1);
q6a2.addEventListener("click", question6Option2);
q6a3.addEventListener("click", question6Option3);
q6a4.addEventListener("click", question6Option4);



function question6Option1() {
    q6a1.style.borderColor = "red";
    quizScore[5] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question6Option2() {
    q6a2.style.borderColor = "red";
    quizScore[5] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question6Option3() {
    q6a3.style.borderColor = "green";
    quizScore[5] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question6Option4() {
    q6a4.style.borderColor = "red";
    quizScore[5] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 7 *********************************************************************

var q7a1 = document.getElementById('q7a1');
var q7a2 = document.getElementById('q7a2');
var q7a3 = document.getElementById('q7a3');
var q7a4 = document.getElementById('q7a4');

q7a1.addEventListener("click", question7Option1);
q7a2.addEventListener("click", question7Option2);
q7a3.addEventListener("click", question7Option3);
q7a4.addEventListener("click", question7Option4);



function question7Option1() {
    q7a1.style.borderColor = "green";
    quizScore[6] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question7Option2() {
    q7a2.style.borderColor = "red";
    quizScore[6] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question7Option3() {
    q7a3.style.borderColor = "red";
    quizScore[6] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question7Option4() {
    q7a4.style.borderColor = "red";
    quizScore[6] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 8 *********************************************************************

var q8a1 = document.getElementById('q8a1');
var q8a2 = document.getElementById('q8a2');
var q8a3 = document.getElementById('q8a3');
var q8a4 = document.getElementById('q8a4');

q8a1.addEventListener("click", question8Option1);
q8a2.addEventListener("click", question8Option2);
q8a3.addEventListener("click", question8Option3);
q8a4.addEventListener("click", question8Option4);



function question8Option1() {
    q8a1.style.borderColor = "red";
    quizScore[7] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question8Option2() {
    q8a2.style.borderColor = "green";
    quizScore[7] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question8Option3() {
    q8a3.style.borderColor = "red";
    quizScore[7] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question8Option4() {
    q8a4.style.borderColor = "red";
    quizScore[7] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 9 *********************************************************************

var q9a1 = document.getElementById('q9a1');
var q9a2 = document.getElementById('q9a2');
var q9a3 = document.getElementById('q9a3');
var q9a4 = document.getElementById('q9a4');

q9a1.addEventListener("click", question9Option1);
q9a2.addEventListener("click", question9Option2);
q9a3.addEventListener("click", question9Option3);
q9a4.addEventListener("click", question9Option4);



function question9Option1() {
    q9a1.style.borderColor = "green";
    quizScore[8] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question9Option2() {
    q9a2.style.borderColor = "red";
    quizScore[8] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question9Option3() {
    q9a3.style.borderColor = "red";
    quizScore[8] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question9Option4() {
    q9a4.style.borderColor = "red";
    quizScore[8] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

// question 10 *********************************************************************

var q10a1 = document.getElementById('q10a1');
var q10a2 = document.getElementById('q10a2');
var q10a3 = document.getElementById('q10a3');
var q10a4 = document.getElementById('q10a4');

q10a1.addEventListener("click", question10Option1);
q10a2.addEventListener("click", question10Option2);
q10a3.addEventListener("click", question10Option3);
q10a4.addEventListener("click", question10Option4);



function question10Option1() {
    q10a1.style.borderColor = "red";
    quizScore[9] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question10Option2() {
    q10a2.style.borderColor = "red";
    quizScore[9] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}

function question10Option3() {
    q10a3.style.borderColor = "green";
    quizScore[9] = 1;
    fullScore();
    myScore.innerText = scoreSum;
}

function question10Option4() {
    q10a4.style.borderColor = "red";
    quizScore[9] = 0;
    fullScore();
    myScore.innerText = scoreSum;
}
