var titleElement = document.getElementById('title');
var messageElement = document.getElementById('message');
var resultElements = document.querySelectorAll('.result-box'); // すべての結果表示ボックス
var rollButton = document.getElementById('rollButton');

const diceFaces = 
    ["『あなたは人に賞められる立派なことをしたのよ。胸を張っていいわ。』 - エヴァンゲリオンシリーズ",
    "『奇跡を起こすのよ。人の意志で。』 - エヴァンゲリオンシリーズ",
    "『奇跡ってのは、起こしてこそ初めて価値が出るものよ。』 - エヴァンゲリオンシリーズ",
    "『奇跡を待つより捨て身の努力よ。やることやっとかないと後味悪いでしょ。』 - エヴァンゲリオンシリーズ",
    "『行きなさいシンジ君！誰かのためじゃない！あなた自身の願いのために！！』 - エヴァンゲリオンシリーズ",
    "『潔癖症はね、辛いわよ、人の間で生きて行くのが。』 - エヴァンゲリオンシリーズ",
    "『男と女はわからないわ ロジックじゃないもの。』 - エヴァンゲリオンシリーズ",
    "『大丈夫 1秒近く余裕があるわ。』 - エヴァンゲリオンシリーズ",
    "『奇跡を待つより地道の努力よ。』 - エヴァンゲリオンシリーズ",
    "『今を維持しようとする力と変えようとする力 その矛盾する2つの性質を共有しているのが 生き物なのよ。』 - エヴァンゲリオンシリーズ",
    "『昨日と同じ今日 今日と同じである明日 繰り返す日常を諦行 むしろ感謝すべき事態ね。』 - エヴァンゲリオンシリーズ",
    "『絶望のリセットではなく 希望のコンティニューを選びます。』 - エヴァンゲリオンシリーズ",
    "『時計の針は元には戻らない。だが、自らの手で進めることはできる。』 - エヴァンゲリオンシリーズ",
    "『逃げちゃダメだ逃げちゃダメだ逃げちゃダメだ。』 - エヴァンゲリオンシリーズ",
    
    "『優秀な人間とは、どれだけ他人に羨まれるかではなくて、多くの人から役に立てるかどうかで決まるんです。』 - デジモンシリーズ",
    "『力は借りたり与えたりするものではない、力は合わせるものだ。』 - デジモンシリーズ",
    "『結局選ばれてやってるんじゃなくて、自分で選んでやってるんだよ。』 - デジモンシリーズ"
];


titleElement.innerText = "【アニメ】";
titleElement.className = "text-white text-4xl font-bold mb-4";
titleElement.style.textAlign = "center";
titleElement.style.fontFamily = "'Playfair Display', serif";
titleElement.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 1)";

function rollDice() {
    resultElements.forEach(resultElement => {
        var randomIndex = Math.floor(Math.random() * diceFaces.length);
        var result = diceFaces[randomIndex];
        resultElement.innerHTML = result;
        resultElement.dataset.result = result;
    });
    
    messageElement.innerHTML = '<p class="text-red-400">一度見て欲しいアニメの名セリフ</p>';
    messageElement.style.textAlign = "center";
    messageElement.style.textShadow = "3px 3px 5px rgba(0, 0, 0, 1)";
}

rollButton.addEventListener("click", rollDice);

rollDice();