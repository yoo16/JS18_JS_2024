// for文を使って年齢のプルダウンメニューを生成
// selectタグ取得​
const ageSelect = document.getElementById('age-select');
const defaultYear = 30;

// TODO: optionタグ生成の繰り返し
// ageSelect という <select> タグを取得する

for (let index = 0; index <= 100; index++) {
    // optionタグ生成​
    const option = document.createElement('option');
    // TODO: 年齢を表示
    option.value = 0; // index を value に設定
    option.innerHTML = 0 + ' 歳'; // index + " 歳" を表示

    // selectタグ に optionタグ追加​
    ageSelect.appendChild(option);
}


/**
 * 複利計算 while
 */
function calculateYears() {
    // 入力値を取得
    const initialDeposit = parseFloat(document.getElementById('initial-deposit').value);
    const interestRate = parseFloat(document.getElementById('saving-interest-rate').value);
    const savingTarget = parseFloat(document.getElementById('saving-target').value);

    var years = 0;
    var currentAmount = initialDeposit;

    // TODO: 複利計算: 預金額 x (1 + 金利) / 100
    // whileで 目標金額に達するまで年を増やして計算

    // 結果を表示
    document.getElementById('year').innerHTML = years;
}