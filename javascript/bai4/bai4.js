function change_backgroud()
{
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i + 1) % 2 == 0){
            divs[i].style.background = "yellow";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "gray";
        }
    }
}