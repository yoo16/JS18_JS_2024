/**
 * for
 * 1 から 1ずつ増やして10回表示
 */
// TODO: For Loop
for (let index = 1; index <= 10; index++) {
    console.log(index)
    // alert(index)
}

/**
 * for
 * 1 から 1000までの足し算
 */
var sum = 0;
// TODO: For Loop
for (let index = 1; index <= 1000; index++) {
    // 1 + 2 + 3 + ....
    sum += index
}
console.log(sum);

/**
 * while
 * 10までの偶数(even number)を表示
 */
var num = 0;
// TODO: While Loop
// num が 10以下だったらずっと繰り返し
while (num <= 10) {
    // 偶数（「２」で割った値が「0」）： num % 2 == 0
    if (num % 2 == 0) {
        console.log(num)
    }
    // num を１増やす
    num++
}