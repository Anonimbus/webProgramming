let completedCount = 0

// ADD TASK
document.querySelector(".add").addEventListener("click", () => {

    let input = document.querySelector("#taskInput")
    let text = input.value.trim()

    if (!text) return

    let div = document.createElement("div")
    let span = document.createElement("span")
    let btn = document.createElement("button")

    span.innerText = text
    btn.innerText = "-"

    div.classList.add("task", "pending")

    div.append(span, btn)
    document.querySelector(".tasks").append(div)

    input.value = ""
})


// EVENT DELEGATION
document.querySelector(".tasks").addEventListener("click", (e) => {

    // DELETE TASK
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove()
    }

    // COMPLETE TASK
    if (e.target.tagName === "SPAN") {

        if (!e.target.classList.contains("completed")) {
            e.target.classList.add("completed")

            let parent = e.target.parentElement
            parent.classList.remove("pending")
            parent.classList.add("done")

            completedCount++
            document.querySelector(".count").innerHTML =
                `Completed Tasks: ${completedCount}`
        }
    }
})


// SHOW COMPLETED
document.querySelector(".showCompleted").addEventListener("click", () => {
    document.querySelectorAll(".task").forEach(task => {
        task.style.display = task.classList.contains("done") ? "" : "none"
    })
})

// SHOW PENDING
document.querySelector(".showPending").addEventListener("click", () => {
    document.querySelectorAll(".task").forEach(task => {
        task.style.display = task.classList.contains("pending") ? "" : "none"
    })
})

// SHOW ALL
document.querySelector(".showAll").addEventListener("click", () => {
    document.querySelectorAll(".task").forEach(task => {
        task.style.display = ""
    })
})