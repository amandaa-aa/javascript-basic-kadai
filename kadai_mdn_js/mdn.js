// 固定の日付オブジェクトを作成
const date = new Date("2024-10-12");

// 年・月・日を取得
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0始まりなので+1
const day = String(date.getDate()).padStart(2, "0");

// 「YYYY年MM月DD日」形式に整形
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate); // 2024年10月12日
