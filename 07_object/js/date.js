// 現在の年月日と時刻を表示する関数
function updateTime() {
    // TODO: 現在の日時の作成
    var now

    // TODO: 年月日と時刻を取得
    var year
    var month
    var day
    var hours
    var minutes
    var seconds

    // フォーマット YYYY/MM/DD HH:MM:SS
    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    // id=datetime の Element取得
    const datetimeElement = document.getElementById("datetime");

    // 日時を設定
    datetimeElement.textContent = formattedDateTime;
}

// 初回実行
updateTime();

// 1秒ごとの更新
setInterval(updateTime, 1000);
