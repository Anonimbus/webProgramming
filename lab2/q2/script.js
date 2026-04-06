document.querySelector("#add").addEventListener("click", () => {

    let name = document.querySelector("#name").value.trim()
    let roll = document.querySelector("#roll").value.trim()

    let wp = Number(document.querySelector("#wp").value.trim())
    let ml = Number(document.querySelector("#ml").value.trim())
    let gd = Number(document.querySelector("#gd").value.trim())
    let lit = Number(document.querySelector("#lit").value.trim())
    let art = Number(document.querySelector("#art").value.trim())

    // validation
    if (!name || !roll || [wp, ml, gd, lit, art].some(isNaN)) {
        alert("Please enter valid inputs")
        return
    }

    let student = {
        name, roll, wp, ml, gd, lit, art
    }

    let total = wp + ml + gd + lit + art
    let percentage = (total / 500) * 100
    let grade = (percentage / 25).toFixed(2)

    let result = percentage > 33 ? "Pass" : "Fail"

    // create row
    let tr = document.createElement("tr")
    tr.classList.add(result === "Pass" ? "pass" : "fail")

    function createCell(data) {
        let td = document.createElement("td")
        td.innerHTML = data
        return td
    }

    tr.append(
        createCell(student.name),
        createCell(student.roll),
        createCell(student.wp),
        createCell(student.ml),
        createCell(student.gd),
        createCell(student.lit),
        createCell(student.art),
        createCell(total),
        createCell(percentage.toFixed(2) + "%"),
        createCell(grade),
        createCell(result)
    )

    document.querySelector("table").append(tr)

})