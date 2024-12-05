// タイトルの設定
var titleElement = document.getElementById("title");
var messageElement = document.getElementById("message");
var diceElement = document.getElementById("dice");
var number = 1;

// タイトルと初期メッセージの設定
titleElement.innerText = 'DICE';
messageElement.innerHTML = 'サイコロをふってください！';

/**
 * ランダムな整数を生成
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

/**
 * サイコロの画像を切り替える関数
 */
const updateDiceImage = (number) => {
    // imgタグ
    var resultElement = document.getElementById("result");
    // TODO: サイコロ画像の更新
    resultElement.src = "images/dice" + number + ".png"
};

/**
 * rollDice()
 * サイコロを振る関数
 */
// TODO: HTML id="rollButton" に onclickイベントで登録
// function rolldice() {}
const rollDice = () => {
    console.log("Click!");


    // 0.05秒間隔で画像を切り替える
    var timer = setInterval(() => {
        // TODO: 1 - 6 のランダムな数字を取得
        var number = randomNumber(1, 6)
        // TODO: updateDiceImage() に number を渡して実行
        updateDiceImage(number)
    }, 50);

    // TODO: アニメーション開始: class = rolling を追加
    // img タグを取得
    var resultElement = document.getElementById("result");
    // class = rolling を追加
    // resultElement.classList.add('rolling')

    // TODO: setTImeout で２秒後にサイコロを止める
    setTimeout(() => {
        // タイマー停止
        clearInterval(timer)
        // TODO: アニメーション終了 class = rolling を削除

        // メッセージ更新
        messageElement.innerHTML = "サイコロをふりました！";
    }, 2000);

};

// ウィンドウ読み込み完了後に実行
window.onload = () => {
    // ローディングを非表示
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}