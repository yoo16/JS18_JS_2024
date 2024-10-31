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