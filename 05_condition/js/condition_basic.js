var result;
var price = 500;

// priceが 500と等しいか？
result = (price == 500)
console.log(result)

// price が 0 より小さいか？
result = (price < 0)
console.log(result)

// price が 500 より大きいか？
result = (price > 500)
console.log(result)

// price が 500 以上か？
result = (price >= 500)
console.log(result)

// 変数の定義
var message = ""
var price = 500
var money = 1000

// if else statement
if (price < 0) {
    // 価格が不正だったら
    message = "エラー"
} else if (price <= money) {
    // 価格が所持金以下だったら
    message = "購入完了"
} else {
    // そうでなければ
    message = "残高不足"
}
console.log(message)

var weekday = "木"
var gabage = ""
// swと入力して switch statement
switch (weekday) {
    case "月":
    case "木":
        gabage = "燃えるゴミ"
        break;
    case "金":
        gabage = "燃えないゴミ"
        break;
    default:
        gabage = "回収なし"
        break;
}
console.log(gabage)