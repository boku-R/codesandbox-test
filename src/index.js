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
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "ボク",
//   age: 30,
// };

// const message = `名前は${myProfile.name}です、年齢は${myProfile.age}歳です。`;
// console.log(message);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です、年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["ぼく", 30];

// const message3 = `ぼくの名前は${myProfile[0]}、年齢は${myProfile[1]}歳だよ。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `ぼくの名前は${name},年齢は${age}歳だよおお`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん!`);
// sayHello("ぼくうう");

/**
 * スプレッド構文 ...
 */
// // 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる処理
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // イコールで配列を渡すと、元の配列も同時に変わってしまう・・・
// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "ボク"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ボク") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// ある条件　? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(20, 90));

/**
 * 論理演算子の本当の意味を知ろう && || とか
 */

// const flag1 = true;
// const flag2 = false;

// // if (flag1 || flag2) {
// //   console.log("1か2はtrueになります");
// // }

// if (flag1 && flag2) {
//   console.log("1も2はtrueになります");
// }

// //  || は、左側がfalseとなる時、右側を返す
// // const num = null;
// // const fee = num || "金額未設定です";
// // console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = true;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
