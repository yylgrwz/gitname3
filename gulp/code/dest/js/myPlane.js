"use strict";var myPlane={ele:null,fireInterval:300,init:function(){return this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),this.ele.className="myplane",this.ele.style.left=(gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth)/2+"px",this.ele.style.top=gameEngine.ele.offsetHeight-myPlane.ele.offsetHeight+"px",this},fire:function(){this.timer=setInterval(function(){(new Bullet).init().move()},this.fireInterval)},move:function(){myPlane.ele.onmousedown=function(e){var n=(e=e||event).offsetX,t=e.offsetY;document.onmousemove=function(e){var l=(e=e||event).pageX-n-gameEngine.ele.offsetLeft;l<=0?l=0:l>gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth&&(l=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth),myPlane.ele.style.left=l+"px",myPlane.ele.style.top=e.pageY-t+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}},boom:function(e){clearInterval(this.timer);var n=["../css/images2/me_die1.png","../css/images2/me_die2.png","../css/images2/me_die3.png","../css/images2/me_die4.png"],t=0,l=setInterval(function(){t>=n.length?(clearInterval(l),gameEngine.ele.removeChild(myPlane.ele),e&&e()):myPlane.ele.style.background="url("+n[t++]+") no-repeat"},200)}};