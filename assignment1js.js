    $(document).ready(function(){
            var b1=document.getElementById("box1");
            $.ajax({
                url:"assignment1body.html",
                dataType:"html",
                success:function(resp){
                    b1.innerHTML=resp;
                    
                    var image1=document.getElementById("img1");
                    var image2=document.getElementById("img2");
                    var image3=document.getElementById("img3");
                    var image4=document.getElementById("img4");
                    var image5=document.getElementById("img5");
                    image1.onclick=function(){
                        var randwidth=Math.floor((Math.random() * 500) + 100); 
                        var randheight=Math.floor((Math.random() * 500) + 100); 
                        image1.style.width=randwidth+"px";
                        image1.style.height=height+"px";
                    }
                    image2.onclick=function(){
                        var randtopmar=Math.floor((Math.random() * 50) + 1); 
                        var randleftmar=Math.floor((Math.random() * 10) + 1); 
                        image2.style.paddingTop=randtopmar+"px";
                        image2.style.paddingLeft=randleftmar+"px";
                    }
                    image3.onclick=function(){
                        var randwidth=Math.floor((Math.random() * 500) + 100); 
                        var randheight=Math.floor((Math.random() * 500) + 100);
                        var randtopmar=Math.floor((Math.random() * 50) + 1); 
                        var randleftmar=Math.floor((Math.random() * 10) + 1); 
                        image3.style.paddingTop=randtopmar+"%";
                        image3.style.paddingLeft=randleftmar+"%";
                        image3.style.width=randwidth+"px";
                        image3.style.height=height+"px";
                    }
                    image4.onclick=function(){
                        var randnum=(Math.floor((Math.random() * 10) + 0))/10; 
                        image4.style.opacity=randnum;
                    }
                    image5.onclick=function(){
                        image5.src="http://placekitten.com/g/100/100/";
                    }
                }
            })
        })