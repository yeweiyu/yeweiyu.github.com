//搜索框小设置
addEvent(window,'load',function(){
    var oInput = document.getElementById("oInput");

    addEvent(oInput,'focus',function(){
        if(oInput.value == "三体"){
            oInput.value = "";
        }
    });
    addEvent(oInput,'blur',function(){
        if(oInput.value == ""){
            oInput.value = "三体"
        }
    });
    var little = document.getElementById("little");
    var little0 = document.getElementById("little0");
    var little1 = document.getElementById("little1");
    var little2 = document.getElementById("little2");
  
    var tag  = document.getElementById("tag");
    var tag0  = document.getElementById("tag0");
    var tag1  = document.getElementById("tag1");
    var tag2  = document.getElementById("tag2");
    addEvent(little,'mouseover',function(){
           tag.style.backgroundColor = 'red';
           startMove(little,-80);

    });
    addEvent(little,'mouseout',function(){
        tag.style.backgroundColor = '#7A6E6E';
        startMove(little,0);
    });
     //little.timer = null;
    function startMove(obj,target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var speed = (target-tag.offsetLeft)/3;
            speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
            //当速度的绝对值小于1时，div不能到达终点，因为像素值最小单位为1px,故要向上取整或则向下取整;
            if(tag.offsetLeft == target){
                clearInterval(timer);
            }
            else {
                tag.style.left = tag.offsetLeft + speed +"px";
            }
        },30);
    }
});