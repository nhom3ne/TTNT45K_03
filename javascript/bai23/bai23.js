function validateSelectBox(obj){
    var options = obj.children;
    var html = '';
    for (var i = 0; i < options.length; i++){
        if (options[i].selected){
            html += '<li>'+options[i].value+'</li>';
        }
    }
    
    document.getElementById('result').innerHTML = html;
}