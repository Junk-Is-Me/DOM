let button = document.querySelector("#clear");
let input = document.querySelector('#text');
let p = document.getElementById("duplicateField");

input.addEventListener('input', update);
function update(event) {
  p.textContent = event.target.value;
}


button.addEventListener("click", clearButton);
function clearButton(event) {
input = document.querySelector("#text");
console.log(input.value)
input.value = "";
duplicateField.textContent = "";
event.preventDefault();
}




