import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  // divタグにclassを付与
  div.className = "list-row";
  console.log(div);

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(p);

  // liタグ生成
  const li = document.createElement("li");

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li).appendChild(div);

  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
