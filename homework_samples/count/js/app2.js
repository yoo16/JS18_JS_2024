// var count = 0;
let count = 0;
const counter = document.getElementById("counter");

function increment() {
    count++;
    // counter.textContent = count;
    // counter.innerHTML = count;
    counter.innerText = count;
}

function decrement() {
    count--;
    // counter.textContent = count;
    // counter.innerHTML = count;
    counter.innerText = count;
}

// イベント登録 addEventListner
// Increseボタンをクリックしたら
document.getElementById('increment-btn').addEventListener('click')