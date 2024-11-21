// TODO: 配列の定義（'コーヒー', '紅茶', 'ほうじ茶'）
var items = ['コーヒー', '紅茶', 'ほうじ茶'];

// コンソール表示
console.log(items);

/**
 * 配列を文字列で表示
 */
function showArrayString() {
    // 配列をカンマ区切りの文字列に変換
    var string = items.join(',');
    document.getElementById('array-string').innerHTML = string;
}

/**
 * 配列の要素表示
 */
function showItem() {
    // ブラウザで入力したインデックスを取得
    const index = document.getElementById('input-index').value;
    console.log(index)

    // インデックス範囲内かチェック
    if (index >= 0 && index < items.length) {
        // TODO: items に index を指定してデータ表示
        document.getElementById('input-value').value;

        // エラーメッセージ空白
        document.getElementById('error').innerHTML = "";
    } else {
        // 配列の個数から、最大インデックスを設定
        var maxIndex = items.length - 1;
        var error = `0 から${maxIndex}の範囲で指定してください。`;
        document.getElementById('error').innerHTML = error;
    }
}

/**
 * 値の更新
 */
function updateItem() {
    // Indexを取得
    const index = document.getElementById('input-index').value;
    // Valueを取得
    const value = document.getElementById('input-value').value;

    console.log(index, value)

    // TODO: インデックスを指定して値更新

    // 配列の値表示
    showItem();

    // 配列の文字列表示
    showArrayString();
}

showArrayString();