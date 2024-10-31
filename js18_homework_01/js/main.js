// 問1
// TODO: 学籍番号と氏名の変数を定義
const studentNumber = "000001";
const studentName = "東京 太郎";

// TODO: 学籍番号と氏名をHTMLに表示
document.getElementById('studentNumber').innerHTML = studentNumber;
document.getElementById('studentName').innerHTML = studentName;

// 問2
// TODO: ウィンドウタイトルを「課題01」に変更
// document.title = `課題01-${studentNumber}-${studentName}`;
document.title = "課題01-" + studentNumber + "-" + studentName;

// 問3: 
//TODO: 整数の中から好きな数字を代入
var memoryNumber = 54;
document.getElementById('memoryNumber').innerHTML = memoryNumber;

// TODO: 計算
var answerNumber = memoryNumber;
// 1. その数字に3をかけます。
// answerNumber *= 3;
answerNumber = answerNumber * 3;

// 2. 結果に6を足します。
// answerNumber += 6;
answerNumber = answerNumber + 6;

// 3. その結果を3で割ります。
// answerNumber /= 3;
answerNumber = answerNumber / 3;

// 4. 最初に思い浮かべた数字を引いてください。
// answerNumber -= memoryNumber;
answerNumber = answerNumber - memoryNumber;

// TODO: 答えをHTML表示
document.getElementById('answerNumber').innerHTML = answerNumber;

// 問2: 日本人の平均寿命は約84歳です。
// 現在のあなたの年齢で、あと何日生きられるかを計算するプログラムを作成してください。
// 平均寿命
const averageLifespan = 84;
// 1年の日数
const daysInYear = 365;
// 現在の年齢
const currentAge = 49;
// 残りの日数
var remainDays = 0;

// TODO: 計算
// 残り日数を計算
remainDays = (averageLifespan - currentAge) * daysInYear;

// TODO: HTML表示
document.getElementById('currentAge').innerHTML = currentAge;
document.getElementById('remainDays').innerHTML = remainDays;