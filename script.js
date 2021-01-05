const container = document.querySelector(".grid-container");
const color = document.querySelector(".color");
const size = document.querySelector(".size");
const reset = document.querySelector(".reset");
let dim = 16;
let random = 0;

function buildBoard() {
  container.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
  let red, green, blue;
  for (let i = 0; i < dim * dim; i++) {
    let n=0.1;
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.addEventListener("mouseover", () => {
        if(random===true){
            red = Math.floor(Math.random() * 255) + 1;
            blue = Math.floor(Math.random() * 255) + 1;
            green = Math.floor(Math.random() * 255) + 1;
        }
        else{
            red=0, green=0, blue=0; 
        }
        item.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${n+=0.1})`;
    });
    container.appendChild(item);
  }
}

buildBoard();

reset.addEventListener("click", () => window.location.reload());

size.addEventListener("click", () => {
  dim = prompt("Enter a number under 64");
  if (!(dim <= 64)) {
    alert("hey! that wasn't under 64!");
    return;
  }
  const prev = document.querySelectorAll(".grid-item");
  prev.forEach((it) => {
    it.style.backgroundColor = null;
  });
  buildBoard();
});

color.addEventListener("click", () => {
 color.textContent = (random ? 'Random color' : 'Black');
 random = !random ? true : false;
});