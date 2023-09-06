// node.jsのライブラリpath
const path= require("path");
// css生成のためのプラグイン
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
// html生成のためのプラグイン
const HtmlWebpackPlugin= require("html-webpack-plugin");
// dist不要ファイル削除のためのプラグイン、{}クラスのみ読み込み
const { CleanWebpackPlugin }= require("clean-webpack-plugin");

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
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: "javascripts/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          }
        ],
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]',
            },
          },
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
