// ブラウザ強制再読み込み
// Mac: Cmd + Shift + R
// Win: Ctrl + Shift + R
// TODO: thisオブジェクト（グローバル）
console.log(this)

// TODO: 現在のURL
document.getElementById('window-href').innerText
    = this.location.href;
    // = location.href;

// TODO: ユーザエージェント
document.getElementById('window-userAgent').innerText
    = this.navigator.userAgent

// TODO: ウィンドウサイズ
document.getElementById('window-size').innerText
    = this.screen.width + ', ' + this.screen.height;

function clickEvent(element, event) {
    // Element取得
    console.log(element);

    // TODO: Elementからクラス名表示
    document.getElementById('this-object').innerText;

    // イベント取得
    console.log(event);

    // TODO: イベントのタイプを表示
    document.getElementById('event-object').innerText;
}