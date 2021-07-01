document.getElementById("btn1").onclick = function ()
{
    var checkbox = document.getElementsByName("gender");
    for (var i = 0; i < checkbox.length; i++){
        if (checkbox[i].checked === true){
            alert(checkbox[i].value);
        }
    }
};