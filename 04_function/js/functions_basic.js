/**
 * ビルトイン関数
 */
var numberString = "0005"
console.log(numberString)

var number = parseInt(numberString)
console.log(number)

var itemName = "コーヒー"
number = parseInt(itemName)
console.log(number)

var result
// isNaN() :数字ではないかをチェックする関数
result = isNaN(numberString)
console.log(result)

// itemNameをチェック
result = isNaN(itemName)
console.log(result)

// numberをチェック
result = isNaN(10)
console.log(result)

/**
 * ユーザ定義関数
 */
// fun と入力して、Function Statement を選ぶ
function calcualte(x) {
    // { } の中で処理をする
    var y = x + 5
    // 結果 y を返す
    return y
}

// calculate を実行する
var answer = calcualte(8)
console.log(answer)

answer = calcualte(28)
console.log(answer)

answer = calcualte(-7)
console.log(answer)