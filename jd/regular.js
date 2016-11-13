var count=0;
var num =["images/center.jpg","images/11.jpg","images/22.jpg","images/33.jpg","images/44.jpg","images/55.jpg"];

var old3 = document.getElementsByClassName("slider-nav");
var old1 = old3[0].getElementsByTagName("li");    //获取所有小按钮的对象
var pre = document.getElementById('pre')
var next1 =  document.getElementById("next");
//实现图片的自动轮播
          for( var i = 0; i< old1.length ; i++){
               old1[i].index = i;
          	old1[i].onmouseover = function(){
                count = this.index;  //控制图片资源的变化参数
                tab();
          	}
          }
function tab(){
    document.getElementById("first").src = num[count];
    old();  //小图标样式清除
    old1[count].style.backgroundColor = "#B61B1F";
}
// 将所有小按钮的样式颜色变为原来的样式
function old(){
        for(var i = 0;i < old1.length; i++){
        	old1[i].style.backgroundColor = "";
        }
     }
     //实现按钮控制图片轮播
 function select(){
     document.getElementById("pre").onclick = previous;
     document.getElementById("next").onclick = next;
      }
    //上一张图片
 function previous(){
        if(count==0){
          count = num.length;
       }
        count--;
        var first =document.getElementById("first")
        first.src = num[count];
        old();
        old1[count].style.backgroundColor = "#B61B1F";
        return false;
     }
     //下一张图片
 function next(){
          count++;
        if(count==num.length){
           count = 0 ;
         } 
         tab();
         return false;
        }
  var moment=setInterval(next,2000);
 function stop(){
    var box2 = document.getElementById('box2');
     box2.onmouseover = function(){
         clearInterval(moment);
         startMove(pre,{opacity:70});
         startMove(next1,{opacity:70});
      }
     box2.onmouseout = function(){
         startMove(pre,{opacity:0});
         startMove(next1,{opacity:0});
         moment = setInterval(next,2000);


     }
 }

 //加载多个函数
 function addLoadEvent(func){
  	var oldonload = window.onload;
  	if(typeof window.onload != 'function'){
  		window.onload = func;
  	}
  	else{
  		window.onload = function(){
  			oldonload();
  			func();
  		}
  	}
  }
  addLoadEvent(select);
  addLoadEvent(stop);
  