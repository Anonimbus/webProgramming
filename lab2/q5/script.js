const quizData = [
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Color Style System"],
        correct: 1
    },
    {
        question: "Which language runs in browser?",
        options: ["Java", "C", "JavaScript"],
        correct: 2
    },
    {
        question: "Which is not a programming language?",
        options: ["HTML", "Python", "Java"],
        correct: 0
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google"],
        correct: 1
    }
]

let currentIndex = 0
let score = 0

const questionEl = document.querySelector("#question")
const optionsEl = document.querySelector("#options")
const scoreEl = document.querySelector("#score")

function loadQuestion() {

    optionsEl.innerHTML = ""

    if (currentIndex >= quizData.length) {
        showResult()
        return
    }

    let currentQ = quizData[currentIndex]
    questionEl.innerText = currentQ.question

    currentQ.options.forEach((opt, i) => {
        let btn = document.createElement("button")
        btn.innerText = opt

        btn.addEventListener("click", () => checkAnswer(i))

        optionsEl.append(btn)
    })
}

function checkAnswer(index) {

    if (index === quizData[currentIndex].correct) {
        score++
        scoreEl.innerText = score
    }

    currentIndex++
    loadQuestion()
}

function showResult() {
    document.querySelector("#quiz-container").innerHTML = `
        <h2>Quiz Finished!</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
        <button id="restart">Restart</button>
    `

    document.querySelector("#restart").addEventListener("click", () => {
        location.reload()
    })
}

loadQuestion()