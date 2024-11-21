const current = document.getElementById('current-station');
const furigana = document.getElementById('current-furigana');
const next = document.getElementById('next-station');
const prev = document.getElementById('prev-station');

// ブラウザの強制再読み込み（キャッシュクリア）
// Win: Ctrl + Shift + R
// Mac: Cmd + Shift + R
// 連想配列（オブジェクト）の定義
// name = 東京, furigana = とうきょう
var station = {
    name: "東京",
    furigana: "とうきょう",
}
// DevTools で確認
console.log(station)

// ブラウザの強制再読み込み
// Windows: Ctrl + Shift + R
// Mac: Cmd + Shift + R

// TODO:駅名表示
current.innerHTML
furigana.innerHTML

// TODO: 駅名、ふりがなのデータ更新
// name = 有楽町, furigana = ゆうらくちょう

// TODO: 駅名表示
current.innerHTML
furigana.innerHTML

// 連想配列の配列
// name: 東京, furigana: とうきょう
// name: 有楽町, furigana: ゆうらくちょう
// name: 新橋, furigana: しんばし
const stations = []

console.log(stations)

// 現在の駅名表示
// index = 1
var currentStation
console.log(currentStation)

// TODO: 駅名表示
current.innerHTML
furigana.innerHTML

// TODO: 前の駅名表示
prev.innerHTML

// TODO: 次の駅名表示
next.innerHTML