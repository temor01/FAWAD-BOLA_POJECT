const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name, douchebag");
  button.textContent = `Player 1: ${name}`;
}


let greet = prompt("Hello weary traveller, who night you be? ");

if greet === ('Arsalan' || 'arsalan') {
  alert("Welcome, enjoy coming!");
}