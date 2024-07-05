// javascriptのコードのポイント
// 1. スラッシュ2本の後に書く文はコメントとなり実行されない
// 2. 行末にはセミコロンをおく
console.log();

// 変数の定義(Javaだと、String 変数名;)
let name; // nameは変数名

// 変数名について
// 数字からはじめない
// アルファベット、数字、アンダースコア、ドル記号が使える

// 大文字小文字は区別される
let number;
let Number;
// number と Number は別の変数として定義される

// ローワーキャメル記法を使用する
let StudentName;
let engineerStudentName;
// 先頭を小文字にして、そのあとの単語を大文字で区切って書く方法

// 定数の定義(Java だと、final String 定数名;)
const user = "みかみ";

// 変数と定数の違い
// 再代入できるのが変数、できないのが定数
// 初期値を使用しない宣言ができるのが変数、できないのが定数
// 初期値宣言
let price;
const priceConst;