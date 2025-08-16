// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
 const addBtn = document.getElementById('add-btn');
 // parent-listというidを持つHTML要素を取得し、定数に代入する
 const parentList = document.getElementById('parent-list');

 // HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  // li要素を新しく作成する
  const childList = document.createElement('li');

  // 作成したli要素に「ボタンをクリックしました」というテキストを追加する
  childList.textContent = 'ボタンをクリックしました';

  // 作成したli要素をul要素の子要素として末尾に追加する
  parentList.appendChild(childList);
});

