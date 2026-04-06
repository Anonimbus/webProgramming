document.getElementById("form").addEventListener("submit", (e) => {

    let valid = true

    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let pass = document.getElementById("pass").value.trim()

    // clear previous errors
    document.getElementById("nErr").innerText = ""
    document.getElementById("eErr").innerText = ""
    document.getElementById("pErr").innerText = ""

    // name validation
    if (name.length < 3) {
        document.getElementById("nErr").innerText = "Invalid name"
        valid = false
    }

    // email validation (slightly better)
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("eErr").innerText = "Invalid email"
        valid = false
    }

    // password validation
    if (pass.length < 6) {
        document.getElementById("pErr").innerText = "Min 6 characters"
        valid = false
    }

    // prevent submit if invalid
    if (!valid) {
        e.preventDefault()
    }
})