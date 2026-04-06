const products = [
    { name: "Shirt", price: 500 },
    { name: "Pants", price: 1500 },
    { name: "Watch", price: 3000 }
]

let cart = []


// DISPLAY PRODUCTS
function displayProducts() {
    const container = document.getElementById("products")
    container.innerHTML = ""

    products.forEach((item, index) => {
        let p = document.createElement("p")
        let btn = document.createElement("button")

        p.innerText = `${item.name} - Rs ${item.price}`
        btn.innerText = "Add"

        btn.addEventListener("click", () => addToCart(index))

        p.append(" ", btn)
        container.append(p)
    })
}


// ADD TO CART
function addToCart(index) {

    let existing = cart.find(item => item.name === products[index].name)

    if (existing) {
        existing.qty++
    } else {
        cart.push({ ...products[index], qty: 1 })
    }

    updateCart()
}


// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1)
    updateCart()
}


// UPDATE CART
function updateCart() {

    let total = 0
    const cartDiv = document.getElementById("cart")
    cartDiv.innerHTML = ""

    cart.forEach((item, index) => {

        total += item.price * item.qty

        let li = document.createElement("li")
        li.innerText = `${item.name} x ${item.qty} `

        let plus = document.createElement("button")
        plus.innerText = "+"
        plus.addEventListener("click", () => {
            item.qty++
            updateCart()
        })

        let minus = document.createElement("button")
        minus.innerText = "-"
        minus.addEventListener("click", () => {
            item.qty--
            if (item.qty <= 0) removeItem(index)
            else updateCart()
        })

        let remove = document.createElement("button")
        remove.innerText = "Remove"
        remove.addEventListener("click", () => removeItem(index))

        li.append(plus, minus, remove)
        cartDiv.append(li)
    })

    document.getElementById("total").innerText = total
}


// INIT
displayProducts()