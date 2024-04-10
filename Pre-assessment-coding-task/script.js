async function fetchTimesTable() {
  const response = await fetch("http://127.0.0.1:5000/times-table");
  const data = await response.json();
  renderTable(data);
}

function renderTable(data) {
  const table = document.getElementById("timesTable");
  table.innerHTML = "";
  data.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.addEventListener("click", () => highlightNumber(cell));
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

function highlightNumber(number) {
  const cells = document.querySelectorAll("#timesTable td");
  cells.forEach((cell) => {
    if (cell.textContent == number) {
      cell.classList.add("highlight");
    } else {
      cell.classList.remove("highlight");
    }
  });
}

fetchTimesTable();
