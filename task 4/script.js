let change = document.querySelector('#change');

let text = document.getElementById("change");

change.addEventListener('click', (event) => {
    text.textContent = prompt("введите данные");
    event.preventDefault(); 
})