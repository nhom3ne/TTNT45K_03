 // Hàm xử lý khi click vào 2 button
 function left_to_right(type) {
    if (type === 1) {
        var left = document.getElementById("right");
        var right = document.getElementById("left");
    } else {
        var left = document.getElementById("left");
        var right = document.getElementById("right");
    }
    selectCategory(left, right);
}

// Hàm chuyển các phần tử từ left sang right
function selectCategory(left, right)
{
    var options = left.children;
    
    // Lấy tất cả những options selected từ left
    var tmp = [];
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            tmp.push(options[i]);
        }
    }
    
    // Đưa option selected qua right
    for (var i = 0; i < tmp.length; i++){
        right.appendChild(tmp[i]);
    }
}