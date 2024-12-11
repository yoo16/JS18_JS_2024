// カルーセル画像の親要素
const carouselImages = document.getElementById("carousel-images");

// スクロールの速度
const scrollSpeed = 1;
// スクロール座標
var scrollX = 0;

// 動的に追加されるインデックス
var currentIndex = 0;

/**
 * createCarouselItem()
 * カルーセル画像作成
 */
function createCarouselItem(item) {
    const img = document.createElement("img");
    img.src = item.image;
    img.classList.add("carousel-image");
    img.onclick = () => openModal(item.id)
    carouselImages.appendChild(img);
}

/**
 * createCarousel()
 * カルーセルリスト作成
 */
function createCarousel() {
    // TODO: 無限スクロール用に items を連結
    const scrollItems = items

    // TODO: scrollItems を forEach() で繰り返し、 createCarouselItem() でカルーセル画像追加
}

/**
 * scrollCarousel()
 * スクロールアニメーション（スムーズ）
 */
function scrollCarousel() {
    // スクロール量の計算(px)
    scrollX -= scrollSpeed;
    // TODO: スクロールを左方向に進める: style.transform に translateX(数字px) 設定
    carouselImages.style.transform

    // カルーセルの幅を取得
    const totalWidth = carouselImages.scrollWidth;

    // TODO: スクロールが一定距離（カルーセルの幅半分）を超えたらリセット

    // TODO: アニメーションを継続
}

// ページ読み込み完了後に実行
createCarousel();
// カルーセルアニメーション実行
setTimeout(scrollCarousel, 500);
