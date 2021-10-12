let consoleLog = document.querySelector('#consoleLog');
let alerT = document.querySelector("#alert");
let prompT = document.querySelector('#prompt');
 
consoleLog.addEventListener('click',() => {
    alert("Метод вывода сообщения в веб-косноль");
})

alerT.addEventListener('click',() => {
    alert("Метод вывода сообщения в окне браузера");
})

prompT.addEventListener('click',() => {
    alert('Метод вывода окне браузера окна с полем для ввода текста');
})