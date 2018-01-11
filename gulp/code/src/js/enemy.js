class Enemy extends Base{
 	constructor(type) {
 		super();
// 	    this.ele=null;
		this.hp=1;
		this.speed=10;
		this.dieImgs = [];
		this.score=10;
		this.type=type;
 	}
	
	init(){
		this.ele=document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		gameEngine.allEnemys.push(this);
		switch(this.type){
			case this.Enemy_Type_Large:
				this.ele.className="enemy-large";
				this.hp=this.Enemy_Hp_Large;
				this.speed=this.Enemy_Speed_Large;
				this.dieImgs = ["../css/images2/plane3_die1.png", "../css/images2/plane3_die2.png",
				"../css/images2/plane3_die3.png", "../css/images2/plane3_die4.png", "../css/images2/plane3_die5.png",
				"../css/images2/plane3_die6.png"];
				this.score=30;
				break;
				
				case this.Enemy_Type_Middle: 
				this.ele.className = "enemy-middle";
				this.hp = this.Enemy_Hp_Middle;
				this.speed = this.Enemy_Speed_Middle;
				this.dieImgs = ["../css/images2/plane2_die1.png", "../css/images2/plane2_die2.png",
				"../css/images2/plane2_die3.png", "../css/images2/plane2_die4.png"];
				this.score = 20; 
				break;
				
				case this.Enemy_Type_Small: 
				this.ele.className = "enemy-small";
				this.hp = this.Enemy_Hp_Small;
				this.speed = this.Enemy_Speed_Small;
				this.dieImgs = ["../css/images2/plane1_die1.png", "../css/images2/plane1_die2.png", 
				"../css/images2/plane1_die3.png"];
				this.score = 10; 
				break;
			default:
			    alert("没有这种敌机");
		}
			this.ele.style.left = parseInt( Math.random() * (gameEngine.ele.offsetWidth-this.ele.offsetWidth) ) + "px";
			this.ele.style.top = -this.ele.offsetHeight + "px";
			
			return this;
		}
		move(){
			let that=this; 
			this.timer=setInterval(function(){
				if(that.ele.offsetTop>gameEngine.ele.offsetHeight){
					clearInterval(this.timer);
					gameEngine.ele.removeChild(that.ele);
					gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(that), 1);
				}
				else{
					that.ele.style.top = that.ele.offsetTop + that.speed + "px";
				}
			},30)
		}
		hurt(){
			this.hp--;
			if(this.hp==0){
				this.boom();
				gameEngine.totalScore += this.score;
			}
		}
		boom(){
			clearInterval(this.timer);
			let that=this;
			let i=0;
			const dieTimer=setInterval(()=>{
				if(i >= that.dieImgs.length){
					clearInterval(dieTimer);
				gameEngine.ele.removeChild(that.ele);
				gameEngine.allEnemys.splice(gameEngine.allEnemys.indexOf(that), 1);
				}
				else{
					that.ele.style.background="url("+that.dieImgs[i++]+") no-repeat";
				}
			},200)
		}
}
Enemy.prototype.Enemy_Type_Large = 1; //类型
Enemy.prototype.Enemy_Type_Middle = 2; 
Enemy.prototype.Enemy_Type_Small = 3; 

Enemy.prototype.Enemy_Speed_Large = 2;  //速度
Enemy.prototype.Enemy_Speed_Middle = 4;  
Enemy.prototype.Enemy_Speed_Small = 6;  

Enemy.prototype.Enemy_Hp_Large = 6;  //血量
Enemy.prototype.Enemy_Hp_Middle = 3;  
Enemy.prototype.Enemy_Hp_Small = 1;  
