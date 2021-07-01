// Lấy 2 button và thẻ div
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var div = document.getElementById('content');

// Thiết lập click cho button 1
button1.onclick = function () {
    div.style.background = "red";
};

// Thiết lập click cho button 2
button2.onclick = function () {
    div.style.background = "blue";
};