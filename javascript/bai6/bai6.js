function deleteElement(){
    // Danh sách thẻ div
    var elements = document.getElementsByTagName('div');

    // Mảng chứa thẻ cần xóa
    var elements_remove = [];

    // Lặp để lấy thẻ div cần xóa
    var index = 0;
    while (index < elements.length){
        if (index % 2 != 0 && index != 0){
            elements_remove.push(elements[index]);
        }
        index++;
    }

    // Thực hiện xóa
    index = 0;
    while (index < elements_remove.length){
        elements_remove[index].remove();
        index++;
    }
}