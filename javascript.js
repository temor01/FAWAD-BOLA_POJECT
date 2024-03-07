
console.log("Hello, World!");

console.log("so far only containers for header and footer has been created. 04/03/2024")



const button = document.querySelector("button");

 button.addEventListener("click", updateName);

function updateName() {
    const name = prompt("Enter a new name");
    button.textContent = 'Player 1: ${name}';
}