const INITIAL_WIDTH = 16;

// Populates grid of squares when passed an int argument
function populateGrid(size) {
    const container = document.querySelector("#etch-container");
    let square = null;
    let row = null;
    
    // Create rows to hold individual squares
    for (let i = 0; i < size; i++) {
        
        row = document.createElement("div");
        row.setAttribute("class", "flex-row");

        // Create individual squares
        for (let j = 0; j < size; j++) {
            square = document.createElement("div");
            square.setAttribute("class", "flex-square");

            // Append each square to row
            row.appendChild(square);
        }
        
        // Append each row to container
        container.appendChild(row);
    }
}

// Makes every individual square change color on mouseover
function onHover() {
    let rows = document.querySelectorAll(".flex-row");
    
    // Use mouseover event to trigger when moving inside child of each row
    rows.forEach(row => {
        row.addEventListener("mouseover", event => {
            event.target.className = "flex-square square-pressed";
        });
    });
}

// Prompts user for new grid size and calls populate grid
function changeGrid() {
    btn = document.querySelector("#new-grid");
    let newSize = "";
    
    btn.addEventListener("click", () => {
        newSize = prompt("Enter the new number of squares per side: ");
        populateGrid(Number(newSize));
    });
    
}

// Execute main function
function main() {
    populateGrid(INITIAL_WIDTH);
    onHover();
    changeGrid();
}

main();


// TODO: create CSS class to make boxes square, create class for making squares black 

// TODO: add event listener for hover when interacting with boxes

// TODO: add logic for:
// - default number of squares (16 x 16)
// - prompting user after pushing button for new grid size
// - removing previous grid and creating new grid in same amount of space as default grid
// Extra Credit:
// Make squares darken by 10% with every interaction
// Make every interaction randomly change the color of each square
// Maybe: toggle button to switch between modes? 