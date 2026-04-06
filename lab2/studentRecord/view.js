const tableBody = document.querySelector("#dataTable tbody");
const searchInput = document.getElementById("search");

function loadTable(filter = "") {
    tableBody.innerHTML = "";

    const records = JSON.parse(localStorage.getItem("records")) || [];

    records
        .filter(r =>
            r.name.toLowerCase().includes(filter) ||
            r.city.toLowerCase().includes(filter) ||
            r.age.toString().includes(filter)   
        )
        .forEach(r => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${r.name}</td>
                <td>${r.age}</td>
                <td>${r.city}</td>
            `;
            tableBody.appendChild(row);
        });
}

loadTable();

searchInput.addEventListener("input", e => {
    loadTable(e.target.value.toLowerCase());
});
