const btn = document.getElementById('btn');
const text = document.getElementById('text');


btn.addEventListener('click', () => {
 setTimeout(() => {
 //ボタンをクリックしましたを表示する
 text.textContent = 'ボタンをクリックしました';
 
 }, 2000);
});
