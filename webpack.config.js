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
  devtool: 'source-map',
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname,'./dist'),
    filename: 'javascripts/main.js',
    publicPath: '/', //webpack5のassetmodulesエラー対策
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options:{
              presets: [
                ['@babel/preset-env'],
                '@babel/preset-react',
              ]
            }
          }
        ]
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          // {
          //   loader: 'style-loader'
          // },
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'images/[name].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ]
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options:{
              pretty: true,
            }
          },
        ]
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/members/taro.pug',
      filename: 'members/taro.html'
    }),
    new CleanWebpackPlugin(),
  ],
  // devServer: {
  //   static: path.resolve(__dirname, 'src'),
  // },
}
