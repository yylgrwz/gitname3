"use strict";var gameEngine={ele:null,allBullets:[],allEnemys:[],totalScore:0,init:function(){return this.ele=document.getElementById("main"),this},start:function(){console.log("开始游戏"),this.loadding(function(){console.log("加载游戏结束！"),myPlane.init().move(),myPlane.fire(),gameEngine.createEnemy(),gameEngine.crash(),gameEngine.moveBackground()})},loadding:function(e){var n=document.createElement("div");gameEngine.ele.appendChild(n),n.className="logo";var a=document.createElement("div");gameEngine.ele.appendChild(a),a.className="load";var l=["../css/images2/loading1.png","../css/images2/loading2.png","../css/images2/loading3.png"],t=0,o=setInterval(function(){++t>=6?(clearInterval(o),gameEngine.ele.removeChild(n),gameEngine.ele.removeChild(a),e&&e()):a.style.background="url("+l[t%3]+") no-repeat"},500)},createEnemy:function(){setInterval(function(){if(Math.random()>.6){new Enemy(Enemy.prototype.Enemy_Type_Large).init().move()}},6e3),setInterval(function(){if(Math.random()>.5){new Enemy(Enemy.prototype.Enemy_Type_Middle).init().move()}},2e3),setInterval(function(){if(Math.random()>.3){new Enemy(Enemy.prototype.Enemy_Type_Small).init().move()}},1e3)},crash:function(){var e=setInterval(function(){for(var n=0;n<gameEngine.allEnemys.length;n++){for(var a=0;a<gameEngine.allBullets.length;a++)isCrash(gameEngine.allEnemys[n].ele,gameEngine.allBullets[a].ele)&&(gameEngine.allBullets[a].boom(),gameEngine.allBullets.splice(a,1),gameEngine.allEnemys[n].hurt());if(isCrash(gameEngine.allEnemys[n].ele,myPlane.ele)){clearInterval(e),myPlane.boom(function(){var e=prompt("请留下您的大名， 您当前的分数是:"+gameEngine.totalScore,"");ajax({type:"post",url:"http://60.205.181.47/myPHPCode4/uploadScore.php",data:{name:e,score:gameEngine.totalScore},success:function(e){console.log("提交成功: "+e),location.href="rand.html"}})});break}}},30)},moveBackground:function(){var e=0;setInterval(function(){gameEngine.ele.style.backgroundPositionY=e+++"px"},30)}};