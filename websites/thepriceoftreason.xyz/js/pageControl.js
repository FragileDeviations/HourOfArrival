// JScript File
function getContent(num){
    var obj = document.getElementById("pageArea");
    var url = num + ".htm";
    obj.src = url;  
}


function getParentContent(num){
    var obj = parent.document.getElementById("pageArea");
    var url = num + ".htm";
    obj.src = url;  
}
