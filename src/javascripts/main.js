// 他ファイルを入力する
// 相対PATH
import './reactApp.jsx';
import my from "./_my.js";
import "../stylesheets/main.scss";
import add from './_add.ts';

console.log("hello from main.js");
console.log(add(3, 9));
my();
