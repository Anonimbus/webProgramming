// GENERATE TABLE
document.getElementById("generate").addEventListener("click", () => {

    let rows = Number(document.getElementById("rows").value)
    let cols = Number(document.getElementById("cols").value)
    let table = document.getElementById("table")

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Enter valid rows and columns")
        return
    }

    table.innerHTML = ""

    for (let i = 0; i < rows; i++) {
        let tr = table.insertRow()

        for (let j = 0; j < cols; j++) {
            let td = tr.insertCell()
            td.innerText = `R${i + 1}C${j + 1}`
        }
    }
})


// ADD ROW
document.getElementById("addRow").addEventListener("click", () => {
    let table = document.getElementById("table")

    let cols = table.rows[0]?.cells.length || 1

    let tr = table.insertRow()

    for (let i = 0; i < cols; i++) {
        tr.insertCell().innerText = "New"
    }
})


// DELETE ROW
document.getElementById("deleteRow").addEventListener("click", () => {
    let table = document.getElementById("table")

    if (table.rows.length > 0) {
        table.deleteRow(-1)
    }
})


// HIGHLIGHT EVEN ROWS
document.getElementById("highlight").addEventListener("click", () => {
    let rows = document.querySelectorAll("#table tr")

    rows.forEach((row, index) => {
        if (index % 2 === 1) {
            row.classList.toggle("even")
        }
    })
})