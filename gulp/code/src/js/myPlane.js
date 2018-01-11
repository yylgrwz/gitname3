let myPlane={
	ele:null,
	fireInterval: 300,
	
	init(){
		this.ele=document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		this.ele.className="myplane";
		this.ele.style.left = (gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth)/2 + "px";
		this.ele.style.top = gameEngine.ele.offsetHeight-myPlane.ele.offsetHeight + "px";
		return this;
	},
	
	fire(){
		this.timer=setInterval(()=>{
			let bullet = new Bullet();
			bullet.init().move();
		}, this.fireInterval);
	},
	
	move(){
		myPlane.ele.onmousedown=(e)=>{
			e=e||event;
			let disx=e.offsetX;
			let disy=e.offsetY;
			document.onmousemove=(e)=>{
				e=e||event;			
				let x=e.pageX-disx-gameEngine.ele.offsetLeft;
				if(x<=0){
					x=0;
				}
				else if(x>gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth){
					x=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth;
				}
				myPlane.ele.style.left=x+"px";
				myPlane.ele.style.top=e.pageY-disy+"px";
			}
			document.onmouseup=()=>{
			document.onmousemove=document.onmouseup=null;
			}
		}
	},
	boom(cb){
		clearInterval(this.timer);
		const dieImgs=["../css/images2/me_die1.png", "../css/images2/me_die2.png", "../css/images2/me_die3.png", "../css/images2/me_die4.png"]
		let i=0;
		const dieTimer=setInterval(()=>{
			if(i>=dieImgs.length){
				clearInterval(dieTimer);
				gameEngine.ele.removeChild(myPlane.ele);
				if(cb){cb();}
			}
			else{
				myPlane.ele.style.background="url("+dieImgs[i++]+") no-repeat";
				}
		},200);
	}
}


































































