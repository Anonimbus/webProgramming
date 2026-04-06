// DIGITAL CLOCK
function updateClock() {
    const now = new Date()
    document.getElementById("clock").innerText = now.toLocaleTimeString()
}

setInterval(updateClock, 1000)


// COUNTDOWN TIMER
let timerInterval = null

document.getElementById("startBtn").addEventListener("click", () => {

    let time = Number(document.getElementById("seconds").value.trim())

    // validation
    if (isNaN(time) || time <= 0) {
        document.getElementById("timer").innerText = "Enter valid seconds"
        return
    }

    clearInterval(timerInterval)

    timerInterval = setInterval(() => {

        if (time <= 0) {
            clearInterval(timerInterval)
            document.getElementById("timer").innerText = "Done!"
            alert("Time's up!")
        } else {
            document.getElementById("timer").innerText = `${time} sec`
            time--
        }

    }, 1000)
})