let container = document.getElementById("container");
let _questionNum = document.getElementById("questionNum");
let quizName = document.getElementById("quizName");
// let quesHead = document.getElementById("quesHead");
let labels = document.getElementsByTagName("label");
let choices = document.querySelectorAll('input[name="ansr"]');
let questionBody = document.getElementById("question");
let warning = document.getElementById("warning");
let nextBtn = document.getElementById("nextBtn");
let questionNum = 0;
var score = 0;
let name = document.getElementById("userName");
name.innerHTML = sessionStorage.name;
if (sessionStorage.gender == 'male') {
    container.classList.add("male")
} else {
    container.classList.add("female")
}
if (sessionStorage.logged) {
    let Exam = {
        quizname: "java script",
        quiztime: 1,
        question: [{
                head: "what is 2*5",
                answers: [
                    1, 2, 3, 4, 5
                ],
                correct: 1
            },
            {
                head: "whats is2",
                answers: [
                    6, 7, 8, 9, 10
                ],
                correct: 7
            },
            {
                head: "whats is3",
                answers: [
                    11, 12, 13, 14, 15
                ],
                correct: 11
            },
            {
                head: "whats is4",
                answers: [
                    16, 17, 18, 19, 20
                ],
                correct: 16
            },
            {
                head: "whats is5",
                answers: [
                    21, 22, 23, 24, 25
                ],
                correct: 21
            }
        ]
    };

    //show first question 
    let {
        quizname,
        quiztime,
        question
    } = Exam
    quizName.innerHTML = quizname
    quesHead.innerHTML = question[0].head
    for (let i = 0; i < labels.length; i++)
        labels[i].innerHTML = question[0].answers[i]

    //show next question after click on next button
    nextBtn.addEventListener("click", nextQuestion)

    function nextQuestion() {
        //remove warning
        addvalue()

        questionBody.classList.remove("noanswer")
        warning.innerHTML = ("")
        //check if any checkbox is checked before next question
        if (anyCheckbox()) {

            if (questionNum < question.length - 1) {

                if (questionNum < question.length - 2) { // last of the last 

                    questionNum++
                    quesHead.innerHTML = question[questionNum].head
                    for (let i = 0; i < labels.length; i++) {
                        labels[i].innerHTML = question[questionNum].answers[i]
                    }

                    // Second Condtion if the NextQuestion is The Last With Submit <<<<<
                } else if (questionNum == question.length - 2) {
                    questionNum++
                    quesHead.innerHTML = question[questionNum].head
                    nextBtn.innerHTML = "Submit"
                    for (let i = 0; i < labels.length; i++) {
                        labels[i].innerHTML = question[questionNum].answers[i]
                    }
                    nextBtn.addEventListener("click", () => {
                        container.innerHTML = `Exam finished   ${score}`
                    })
                }
            }
            //if no answer 
            else {
                questionBody.classList.add("noanswer")
                warning.innerHTML = ("You Have to Choose answer")
            }
            for (const choice of choices) choice.checked = false; //to make it empty
            _questionNum.innerHTML = `Question ${questionNum+1}:`

        }
    }
    //check if any radiobox checked
    function anyCheckbox() {
        // var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < choices.length; i++)
            if (choices[i].checked) {
                console.log(choices[i].value)
                if (choices[i].value == question[questionNum].correct) {
                    score += 10
                    console.log(score)
                }
                return true;
            }
        return false;
    }

    function addvalue() {
        for (var i = 0; i < choices.length; i++) {
            choices[i].value = question[questionNum].answers[i]
        }
    }

    function examtimer() {
        var time = document.getElementById("timer");
        // var { QuizTime } = exam;
        var sec = quiztime * 60; // change min to sec
        console.log();
        let timer = setInterval(function () {
            secpass();
        }, 1000);

        function secpass() {
            var min = Math.floor(sec / 60), //min
                remSec = sec % 60; //sec
            if (remSec < 10) {
                remSec = "0" + remSec;
            }
            if (min < 10) {
                min = "0" + min;
            }
            time.innerHTML = min + ":" + remSec; //timer style
            if (sec > 0) {
                sec = sec - 1; //decrease by 1 sec
            } else {
                clearInterval(timer);
                container.innerHTML = `Exam finished   ${score}`
            }
        }
    }
    examtimer();
}