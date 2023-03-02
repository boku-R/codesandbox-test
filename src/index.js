import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  // divタグにclassを付与
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンが押されたら、未完了から削除される
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // pタグを生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // liタグを生成
    const li = document.createElement("li");
    li.appendChild(addTarget);
    console.log(li);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);

    // const completeTarget = completeButton.parentNode.parentNode;

    // 完了リストに追加
    // const todoText = completeButton.parentElement.innerText;
    // console.log(todoText);
    // document.getElementById("complete-area").appendChild(li);

    // // 未完了リストから削除
    // document.getElementById("incomplete-list").removeChild(completeTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンが押された時の処理、親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグ生成、子要素にdivを設定
  const li = document.createElement("li");
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // alert(inputText);
};

// 未完了のTODOリストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
