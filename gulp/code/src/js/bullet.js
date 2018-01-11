class  Bullet extends Base{
	constructor() {
		super();
//	    this.ele=null;
	}
	
	init(){
		this.ele=document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		gameEngine.allBullets.push(this);
		this.ele.className="bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	move(){
		let that=this;
		this.timer=setInterval(()=>{
			if(that.ele.offsetTop<=-18){
				clearInterval(that.timer);
				gameEngine.ele.removeChild(that.ele);
				let index = gameEngine.allBullets.indexOf(that);
				gameEngine.allBullets.splice(index, 1);
				return;
			}
			else{
				that.ele.style.top = that.ele.offsetTop - 10 + "px";
			}
		},30);
	}
	boom(){
		clearInterval(this.timer);
		this.ele.className="bullet-die";
		let that = this;
		const dieImgs=["../css/images2/die1.png","../css/images2/die2.png"];
		let i=0;
		const dieTimer=setInterval(()=>{ 
			if(i>=1){
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(that.ele);
			}
			else{
				that.ele.style.background="url("+dieImgs[++i]+") no-repeat";
			}
		},200);
	}
}
