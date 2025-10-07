var titleElement = document.getElementById('title');
var messageElement = document.getElementById('message');
var resultElements = document.querySelectorAll('.result-box');
var rollButton = document.getElementById('rollButton');

// 名言の配列（引用符・作者ともに記載）


// タイトル・スタイルの調整
titleElement.innerText = "【世界中の名言】";
titleElement.className = "text-white text-4xl font-bold mb-4";
titleElement.style.textAlign = "center";
titleElement.style.fontFamily = "'Playfair Display', serif";
titleElement.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 1)";

// サイコロを振ってランダムな名言を表示
function rollDice() {
    resultElements.forEach(resultElement => {
        var randomIndex = Math.floor(Math.random() * diceFaces.length);
        var result = diceFaces[randomIndex];
        resultElement.innerHTML = result;
        resultElement.dataset.result = result;
    });

    messageElement.innerHTML = '<p class="text-yellow-400">~自分にピッタリな名言~</p>';
    messageElement.style.textAlign = "center";
    messageElement.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 1)";
}

// 入力されたキーワードで名言を絞り込む
function searchKeyword() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = "";

    var filteredQuotes = diceFaces.filter(function (quote) {
        return quote.toLowerCase().includes(input);
    });

    if (filteredQuotes.length === 0) {
        resultsDiv.innerHTML = '<p>該当する名言はありません</p>';
    } else {
        var ul = document.createElement('ul');
        filteredQuotes.forEach(function (quote) {
            var li = document.createElement('li');
            li.textContent = quote;
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    }
}

rollButton.addEventListener("click", rollDice);
rollDice();