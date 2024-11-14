const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];

// 現在の年月日と時刻を表示する関数
function updateTime() {
    // TODO: 現在の日時の作成
    var now = new Date()

    // TODO: 年月日と時刻を取得
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var day = now.getDate()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    // 曜日のインデック（番号）
    var weekIndex = now.getDay()
    var weekString = daysOfWeek[weekIndex]

    // フォーマット YYYY/MM/DD HH:MM:SS
    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds} (${weekString})`;
    // const formattedDateTime = year + "/" + month + "/" + day + " " + hours + ":" + minutes + ":" + seconds + "(" + weekString + ")";

    // id=datetime の Element取得
    const datetimeElement = document.getElementById("datetime");

    // 日時を設定
    datetimeElement.textContent = formattedDateTime;
}

// 初回実行
updateTime();

// 1秒ごとの更新
setInterval(updateTime, 1000);
