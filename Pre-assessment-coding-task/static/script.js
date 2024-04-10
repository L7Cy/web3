const container = document.getElementById("timesTable");

for (let row = 1; row <= 12; row++) {
  for (let col = 1; col <= 12; col++) {
    const cell = document.createElement("div");
    cell.textContent = row * col;
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}
