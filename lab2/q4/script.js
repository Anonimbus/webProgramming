const targetNumber = Math.floor(Math.random() * 1000) + 1

let score = 100
let gameOver = false

document.querySelector(".guessBtn").addEventListener("click", () => {

    if (gameOver) return

    let guess = Number(document.querySelector("#guessInput").value.trim())
    let hintText = ""

    // validation
    if (isNaN(guess) || guess < 1 || guess > 1000) {
        document.querySelector(".hint").innerHTML = "Enter a valid number (1-1000)"
        return
    }

    if (guess > targetNumber) {
        hintText = "Guess Lower"
        score -= 10
    } 
    else if (guess < targetNumber) {
        hintText = "Guess Higher"
        score -= 10
    } 
    else {
        hintText = "🎉 Correct Guess!"
        gameOver = true
    }

    if (score <= 0 && !gameOver) {
        document.querySelector(".hint").innerHTML = "Game Over 😢"
        document.querySelector(".score").innerHTML = "Score: 0"
        gameOver = true
        return
    }

    document.querySelector(".hint").innerHTML = hintText
    document.querySelector(".score").innerHTML = `Score: ${score}`
})