// node.jsのライブラリpathを利用
const path= require("path");

// エントリーポイント＝初めに見るindexとなるファイル、ビルドする出力先
// module.exports= {
//   entry: "./src/index.js",
//   output: {
//     path: "./dist"
//   }
// }
// 相対PATHだとビルドでエラーが出る

// メソッドpath.resolveで絶対PATH取得、__dirnameはプロジェクトファイル位置
// moduleオプション、test条件ファイル名.css検知したとき、//正規表現で.をエスケープするため\.としている、use命令"css-loader"を使用、loaderは下から読み込まれるので注意
module.exports= {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname,'./dist'),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ],
      }
    ]
  }
}
