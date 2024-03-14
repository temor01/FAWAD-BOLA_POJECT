const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name, douchebag");
  button.textContent = `Player 1: ${name}`;
}