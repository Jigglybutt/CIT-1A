var navi=document.getElementById("naviDiv");
$(document).ready(function(){
    $.ajax({
    url:"naviBar.html",
        dataType:"html",
        success:function(resp){
            console.log(resp);
            naviDiv.innerHTML=resp;
        }
                               
    }) 
                        
});