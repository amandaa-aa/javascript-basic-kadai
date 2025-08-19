const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
 console.log('ボタンをクリックしました');
});


// ボタンがクリックされたら h2 の文字を書き換える
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  console.log('ボタンをクリックしました（非同期処理）');
}, 2000);