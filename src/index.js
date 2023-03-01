/**
 * const,letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能

// val1 = "var変数を上書き";
// console.log(val1);

// // var変数を再宣言
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書きました";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数を宣言";
// console.log(val3);

// // const変数は上書きできません
// // val3 = "const変数を上書きしようとしてます";

// const val3 = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけ",
//   age: 30,
// };
// val4.name = "jake";
// val4.address = "Mito";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃけ";
// const age = 30;
// // 「私の名前はじゃけ、年齢は30です。」

// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);

// // テンプレート文字列を用いると
// const messsage2 = `私の名前は${name}です。年齢は${age}です！`;
// console.log(messsage2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};

console.log(func2("func2です"));
