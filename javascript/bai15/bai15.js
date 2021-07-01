function add_element(){
    var title = document.getElementById('title').value;
    if (title == ''){
        alert("Bạn chưa nhập tiêu đề");
    }
    else {
        var html = '<div style="background:red; margin: 5px; padding:5px; color:#FFF">'+title+'</div>';
        document.getElementById('result').insertAdjacentHTML('afterend', html);
    }
}