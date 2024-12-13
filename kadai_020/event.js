const btn = document.getElementById('btn');
const parentList = document.getElementById('text');

btn.addEventListener('click', () => {
const childList = document.getElementById('text');
childList.textContent = 'ボタンをクリックしました';
});
