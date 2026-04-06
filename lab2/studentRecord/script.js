const form = document.getElementById("dataForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const record = {
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value.trim(),
        city: document.getElementById("city").value.trim()
    };

    let records = JSON.parse(localStorage.getItem("records")) || [];
    records.push(record);
    localStorage.setItem("records", JSON.stringify(records));

    form.reset();
    alert("Record added successfully!");
});
