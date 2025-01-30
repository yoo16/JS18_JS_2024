// 商品画像リスト
const items = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
];

// 初期設定
const mainImage = document.getElementById("main-image");
const thumbnailsContainer = document.getElementById("thumbnails");

// 初期メイン画像を設定
// src="images/image1.jpg"
mainImage.src = items[0];

// サムネイルを動的に生成
items.forEach(function (item) {
    // imgタグを作成
    const thumbnail = document.createElement("img");
    // <img src="xxxx.jpg"
    thumbnail.src = item;
    // <img class="xxxxx"
    thumbnail.className =
        "w-16 h-16 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-110";

    // マウスオーバーでメイン画像を更新
    // thumbnail.onmouseover = () => {
    //     mainImage.src = item;
    // }
    thumbnail.addEventListener('mouseover', function () {
        mainImage.src = item;
    });

    // サムネイルをコンテナに追加
    thumbnailsContainer.appendChild(thumbnail);
});