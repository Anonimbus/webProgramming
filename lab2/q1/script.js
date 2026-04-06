let historyArr = []

function updateHistory(result){
    historyArr.unshift(result)

    if(historyArr.length > 5){
        historyArr.pop()
    }

    let historyHTML = ""
    historyArr.forEach(item => {
        historyHTML += `<li>${item}</li>`
    })

    document.querySelector(".history").innerHTML = historyHTML
}

function getInputs(){
    let num1 = Number(document.querySelector("#n1").value.trim())
    let num2 = Number(document.querySelector("#n2").value.trim())

    if(isNaN(num1) || isNaN(num2)){
        document.querySelector(".results").innerHTML = "Invalid Input"
        return null
    }

    return {num1, num2}
}

// ADD
document.querySelector(".sum").addEventListener("click", ()=>{
    let values = getInputs()
    if(!values) return

    let result = `${values.num1} + ${values.num2} = ${values.num1 + values.num2}`
    document.querySelector(".results").innerHTML = result
    updateHistory(result)
})

// SUB
document.querySelector(".sub").addEventListener("click", ()=>{
    let values = getInputs()
    if(!values) return

    let result = `${values.num1} - ${values.num2} = ${values.num1 - values.num2}`
    document.querySelector(".results").innerHTML = result
    updateHistory(result)
})

// MUL
document.querySelector(".mul").addEventListener("click", ()=>{
    let values = getInputs()
    if(!values) return

    let result = `${values.num1} x ${values.num2} = ${values.num1 * values.num2}`
    document.querySelector(".results").innerHTML = result
    updateHistory(result)
})

// DIV
document.querySelector(".div").addEventListener("click", ()=>{
    let values = getInputs()
    if(!values) return

    if(values.num2 === 0){
        document.querySelector(".results").innerHTML = "Cannot divide by zero"
        return
    }

    let result = `${values.num1} / ${values.num2} = ${values.num1 / values.num2}`
    document.querySelector(".results").innerHTML = result
    updateHistory(result)
})

// CLEAR HISTORY
document.querySelector(".clear").addEventListener("click", ()=>{
    historyArr = []
    document.querySelector(".history").innerHTML = ""
    document.querySelector(".results").innerHTML = ""
})