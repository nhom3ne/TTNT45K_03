function isURL(url){
    if (url == ""|| url == null)
            return false;

    url = trim(url);

    if (url.indexOf(" ")!=-1)
            return false;

    var RegExp = /^http(s)?:\/\/[\w|\-]+(\.[^\.]+)+$/i;

    if(RegExp.test(url)){
            return true;
    }else{
            return false;
    }
}