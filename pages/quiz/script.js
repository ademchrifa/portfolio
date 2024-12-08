const init = () => {
    lenis = new Lenis({
        lerp: 0.04,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
};

init();

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {

        gsap.to("nav", {
            y: "-125px",
            duration: 0.7,
            ease: "power2.out",
        });

        gsap.to(".logo", {
            y: "-125px",
            duration: 0.7,
            ease: "power2.out",
        });

    } else {
        gsap.to("nav", {
            y: "0px",
            duration: 0.7,
            ease: "power2.out",
        });

        gsap.to(".logo", {
            y: "0px",
            duration: 0.7,
            ease: "power2.out",
        });
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

const folderImage = document.querySelector(".folder-image");
const navElements = document.querySelector(".nav-elements");
const navItems = document.querySelectorAll(".nav-element");

let isNavVisible = false;

folderImage.addEventListener("click", () => {
    if (!isNavVisible) {
        gsap.to(folderImage, { rotate: 180, duration: 0.5 });
        gsap.to(navElements, { display: "flex", opacity: 1, duration: 0.2 });
        gsap.fromTo(
            navItems,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
        );
    } else {
        gsap.to(folderImage, { rotate: 0, duration: 0.5 });
        gsap.to(navItems, { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 });
        gsap.to(navElements, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => (navElements.style.display = "none"),
        });
    }
    isNavVisible = !isNavVisible;
});

const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('quizGuideModal');
const continueQuizBtn = document.getElementById('continueQuiz');
const exitQuizBtn = document.getElementById('exitQuiz');
const mainContent = document.getElementById("mainContent");
const quizContent = document.getElementById("quizContent");
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

continueQuizBtn.addEventListener('click', () => {
    gsap.timeline({})
        .to(modal, {
            opacity: 0,
            duration: 1.5,
            x: -200,
            ease: "power2.inOut",
        })
        .to(modal, {
            display: "none",
            opacity: 0,
            duration: 0,
        })
        .to(mainContent, {
            opacity: 0,
            duration: 1.5,
            x: -200,
            ease: "power2.inOut",
        })
        .to(mainContent, {
            display: "none",
            opacity: 0,
            duration: 0,
        })
        .to(quizContent, {
            display: "block",
            opacity: 0,
            duration: 0,
        })
        .to(quizContent, {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.inOut",
        });

    setTimeout(() => {
        displayQuestion();
        const music = new Audio('../../sounds/music.mp3');
        music.volume = 0.1;
        music.play();
    }, 5000);



});

exitQuizBtn.addEventListener('click', () => {
    alert('Quiz exited!');
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});



let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HyperText Machine Language", correct: false },
            { text: "Hyperlink Markup Language", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Cascading Simple Sheets", correct: false },
            { text: "Computing Style Sheets", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct syntax to change the background color in CSS?",
        answers: [
            { text: "background-color: red;", correct: true },
            { text: "background: color red;", correct: false },
            { text: "color-background: red;", correct: false },
            { text: "bg-color: red;", correct: false },
        ]
    },
    {
        question: "Which of the following is used to link an external CSS file to an HTML document?",
        answers: [
            { text: "<link href='style.css' rel='stylesheet'>", correct: true },
            { text: "<css src='style.css'>", correct: false },
            { text: "<style src='style.css'>", correct: false },
            { text: "<stylesheet>style.css</stylesheet>", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: [
            { text: "<style>", correct: true },
            { text: "<script>", correct: false },
            { text: "<css>", correct: false },
            { text: "<link>", correct: false },
        ]
    },
    {
        question: "What does the 'margin' property in CSS do?",
        answers: [
            { text: "Creates space outside the element", correct: true },
            { text: "Changes the size of the element", correct: false },
            { text: "Creates space inside the element", correct: false },
            { text: "Defines the font size", correct: false },
        ]
    },
    {
        question: "In JavaScript, how do you declare a variable?",
        answers: [
            { text: "var myVar;", correct: true },
            { text: "variable myVar;", correct: false },
            { text: "let myVar;", correct: false },
            { text: "myVar = 10;", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct syntax for a JavaScript function?",
        answers: [
            { text: "function myFunction() {}", correct: true },
            { text: "function: myFunction() {}", correct: false },
            { text: "myFunction() => {}", correct: false },
            { text: "def myFunction() {}", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct way to create a JavaScript array?",
        answers: [
            { text: "let arr = [];", correct: true },
            { text: "let arr = ();", correct: false },
            { text: "let arr = {}; ", correct: false },
            { text: "let arr = [1, 2, 3];", correct: true },
        ]
    },
    {
        question: "What does the 'box-sizing' property do in CSS?",
        answers: [
            { text: "Defines how the width and height of an element are calculated", correct: true },
            { text: "Changes the box shadow of an element", correct: false },
            { text: "Resizes the box of an element", correct: false },
            { text: "Defines the padding of an element", correct: false },
        ]
    },
    {
        question: "Which HTML attribute is used to define the character encoding for a webpage?",
        answers: [
            { text: "charset", correct: true },
            { text: "encoding", correct: false },
            { text: "lang", correct: false },
            { text: "meta", correct: false },
        ]
    },
    {
        question: "What is the default value of the position property in CSS?",
        answers: [
            { text: "static", correct: true },
            { text: "absolute", correct: false },
            { text: "relative", correct: false },
            { text: "fixed", correct: false },
        ]
    },
    {
        question: "Which of the following is the correct JavaScript syntax to print a message to the console?",
        answers: [
            { text: "console.log('Hello, World!');", correct: true },
            { text: "print('Hello, World!');", correct: false },
            { text: "echo('Hello, World!');", correct: false },
            { text: "log('Hello, World!');", correct: false },
        ]
    },
    {
        question: "Which of the following is used to select an element by its ID in JavaScript?",
        answers: [
            { text: "document.getElementById('elementId')", correct: true },
            { text: "document.getElementByClass('elementId')", correct: false },
            { text: "document.querySelector('#elementId')", correct: false },
            { text: "document.getElementByTagName('elementId')", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const timerElement = document.getElementById("timer");
const questionCounterElement = document.getElementById("question-counter");

let timer;
let timeLeft = 15;

function startTimer() {
    const progressBar = document.getElementById("progress-bar");
    const totalTime = 15;
    const updateInterval = 10;
    let timeLeft = 15;

    progressBar.style.width = "100%";

    const soundEffect = new Audio('../../sounds/lastseconds.mp3');
    soundEffect.volume = 0.1;
    timer = setInterval(() => {
        timeLeft -= updateInterval / 1000;
        progressBar.style.width = `${Math.max(0, (timeLeft / totalTime) * 100)}%`;

        console.log(timeLeft);
        if (timeLeft <= 3 && timeLeft > 0) {
            document.getElementById("progress-bar").style.backgroundColor = "#a61f32";
            soundEffect.play();
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            disableAnswers();
            highlightCorrectAnswer();
            nextButton.disabled = false;
        }


    }, updateInterval);
}


function disableAnswers() {
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answer) => {
        answer.disabled = true;
        answer.classList.add("disabled");
        answer.style.cursor = "not-allowed";
    });
}

function highlightCorrectAnswer() {
    const current = questions[currentQuestion];
    const answers = document.querySelectorAll(".answer");
    const correctAnswer = current.answers.find((answer) => answer.correct);
    const correctAnswerDiv = Array.from(answers).find(
        (answer) => answer.textContent === correctAnswer.text
    );
    correctAnswerDiv.classList.add("correct");
    correctAnswerDiv.style.backgroundColor = "green";
    correctAnswerDiv.style.color = "white";
}

function displayQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answersElement.innerHTML = "";

    current.answers.forEach((answer) => {
        const answerDiv = document.createElement("button");
        answerDiv.classList.add("answer");
        answerDiv.textContent = answer.text;
        answerDiv.addEventListener("click", function () {
            handleAnswer(answer, answerDiv);
        });
        answersElement.appendChild(answerDiv);
    });

    questionCounterElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    nextButton.disabled = true;
    timeLeft = 15;
    startTimer();
}

function handleAnswer(selectedAnswer, answerElement) {
    clearInterval(timer);
    disableAnswers();
    const answers = document.querySelectorAll('.answer');

    const correctSound = new Audio('../../sounds/nice.mp3');
    const wrongSound = new Audio('../../sounds/wrong.mp3');
    wrongSound.volume = 0.2;
    answers.forEach(answer => {
        answer.disabled = true;
        if (answer.textContent === selectedAnswer.text && selectedAnswer.correct) {
            answer.classList.add('correct');
            answer.style.backgroundColor = 'green';
            answer.style.color = 'white';
            correctSound.play();

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else if (answer.textContent === selectedAnswer.text && !selectedAnswer.correct) {
            answer.classList.add('wrong');
            answer.style.backgroundColor = 'red';
            answer.style.color = 'white';
            wrongSound.play();

            const quizContainer = document.getElementById("quiz-container");
            quizContainer.classList.add("shake");
            setTimeout(() => {
                quizContainer.classList.remove("shake");
            }, 500);
        }
    });



    if (selectedAnswer.correct) {
        score++;
    }

    nextButton.disabled = false;
}


nextButton.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
        document.getElementById("progress-bar").style.backgroundColor = "#38c172";
    } else {
        endQuiz();
    }
});

restartButton.addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("quiz-results").style.display = "none";
    displayQuestion();
});

function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-results").style.display = "block";
    document.getElementById("final-score").textContent = score;

    const percentage = Math.floor((score / questions.length) * 100);
    updateCircleProgress(percentage);

    if (score == 14) {
        const end = Date.now() + 15 * 1000;

        const colors = ["#bb0000", "#ffffff"];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });

            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }
}

function updateCircleProgress(percentage) {
    const progressCircle = document.getElementById("progress-circle");
    const percentageText = document.getElementById("percentage");

    const offset = 440 - (440 * percentage) / 100;
    progressCircle.style.strokeDashoffset = offset;

    percentageText.textContent = `${percentage}%`;
}


document.getElementById("home-button").addEventListener("click", () => {
    gsap.timeline({})
        .to("main", {
            opacity: 0,
            duration: 1.5,
            y: -200,
            ease: "power2.inOut",
        })
        .to("nav", {
            opacity: 0,
            duration: 1.5,
            y: -200,
            ease: "power2.inOut",
        })
        .call(() => {
            window.location.href = "../../index.html";
        });
})

document.getElementById("homeNav").addEventListener("click", () => {
    window.location.href = "../../index.html";
});

document.getElementById("experiences").addEventListener("click", () => {
    window.location.href = "../experiences/index.html";
});

