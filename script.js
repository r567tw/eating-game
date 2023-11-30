var places = [];

document.addEventListener('DOMContentLoaded', function () {
    fetch('resource.txt') // 替換成您的檔案路徑
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n'); // 使用換行符號分隔
            lines.forEach(line => {
                console.log(line)
                places.push(line)
            });
        })
        .catch(error => console.error(error));
});


let intervalId; // 用於存儲隨機顯示的定時器ID

// 獲取按鈕和結果元素
const randomFoodBtn = document.getElementById('randomFoodBtn');
const foodResult = document.getElementById('foodResult');
const foodPrefix = document.getElementById('foodPrefix');

// 點擊按鈕時觸發的函數
randomFoodBtn.addEventListener('click', () => {
    foodPrefix.textContent = `今天你可以吃：`
    // 清除之前的定時器
    clearInterval(intervalId);

    // 開始隨機顯示食物
    intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * places.length);
        const selectedFood = places[randomIndex];
        foodResult.textContent = selectedFood;
    }, 10); // 每0.2秒顯示一次隨機食物

    // 顯示選擇的食物
    setTimeout(() => {
        clearInterval(intervalId);
        const finalRandomIndex = Math.floor(Math.random() * places.length);
        const finalSelectedFood = places[finalRandomIndex];
        foodResult.textContent = finalSelectedFood;
    }, 3000);
});