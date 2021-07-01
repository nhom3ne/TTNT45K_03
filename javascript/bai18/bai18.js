document.getElementById('btn').onclick = function()
{
    // Khai báo tham số
    var checkbox = document.getElementsByName('hobby');
    var result = "";
    
    // Lặp qua từng checkbox để lấy giá trị
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            result += ' [' + checkbox[i].value + ']';
        }
    }
    
    // In ra kết quả
    alert("Sở thích là: " + result);
};