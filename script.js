const container = document.getElementById("container");
const btn = document.getElementById("reset");
const clrbtn = document.getElementById("clear");

// Default, initial grid size
gridSize = 16;

function createGrid(size) {
    // Remove any existing squares
    container.innerHTML = "";

    // Calculate size of each square so grid fits in 960px
    const squareSize = 960/size;

    for(let i = 0; i < size*size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseover",() => square.classList.add("hovered"));

        container.appendChild(square);
    }
}

// Button prompt for new grid
btn.addEventListener("click", () => {
    const newSize = parseInt(prompt("Enter grid size! (max 100):"));
    if(isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }
    gridSize = newSize;
    createGrid(gridSize);
})

clrbtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => square.classList.remove("hovered"));
});

// Create the initial grid
createGrid(gridSize);