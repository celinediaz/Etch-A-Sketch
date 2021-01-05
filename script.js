const container = document.querySelector(".grid-container");
const color = document.querySelector(".color");
const size = document.querySelector(".size");
const reset = document.querySelector(".reset");
let dim = 16;
let random = 0;
let red, green, blue;

/**
 * Builds the board according to dim. If the user had clicked on
 * random color then you get random colors, else you get black.
 */
function buildBoard() {
  container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
  for (let i = 0; i < dim * dim; i++) {
    let n = 0.1;
    let item = document.createElement("div");
    item.classList.add("grid-item");
    item.addEventListener("mouseover", () => {
      if (n <= 1) {
        n += 0.1;
      }
      if (random === true) {
        red = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
      } else {
        (red = 0), (green = 0), (blue = 0);
      }
      item.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${n})`;
    });
    container.appendChild(item);
  }
}
buildBoard();

// Refreshes the page when clicking on the reset button
reset.addEventListener("click", () => window.location.reload());

/**
 * When the size button is clicked the user is asked for a number
 * if it's smaller or equal to 64 it eliminates the previous style
 * on the grid items and calls the buildBoard function.
 */
size.addEventListener("click", () => {
  dim = prompt("Enter a number under or equal to 64");
  if (!(dim <= 64)) {
    alert("hey! that wasn't under 64!");
    return;
  }
  const prev = document.querySelectorAll(".grid-item");

  prev.forEach((it) => {
    it.remove();
  });
  buildBoard();
});

/**
 * If the color button is clicked it switches its content and
 * state to either random color or black.
 */
color.addEventListener("click", () => {
  color.textContent = random ? "Random color" : "Black";
  random = !random ? true : false;
});
