// オーダーアプリ
const TAX_RATE = 0.1;
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;
var tableNo = 1;

/**
 * showHTML()
 * HTML表示
 */
// TODO: 関数定義


/**
 * calculateTotalPrice()
 * 合計金額（税込）の計算 
 */
// TODO: 関数定義

/**
 * createOrderCode()
 * オーダーコード作成
 */
// TODO: 関数定義

/**
 * randomNumber()
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

// TODO: HTML表示（商品名、価格、個数）

// TODO: 合計金額計算

// TODO: HTML表示（割引、合計金額）

// TODO: オーダーコード（テーブルNo-オーダーNo）、完了メッセージ処理