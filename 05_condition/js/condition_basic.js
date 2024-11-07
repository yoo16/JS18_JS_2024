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

// switch statement
var weekday = "木"
var gabage = ""


