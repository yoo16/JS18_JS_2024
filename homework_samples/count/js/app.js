// var count = 0;
let count = 0;
const counter = document.getElementById("counter");

function increment() {
    count++;
    // counter.textContent = count;
    // counter.innterHTML = count;
    counter.innterText = count;
}

function decrement() {
    count--;
    // counter.textContent = count;
    // counter.innterHTML = count;
    counter.innterText = count;
}