const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
 console.log('ボタンをクリックしました');
});

btn.addEventListener('click', () => {
  // クリックしてから2秒後にh2を書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});
