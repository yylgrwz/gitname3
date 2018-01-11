let gameEngine={
	ele:null,
	allBullets: [],
	allEnemys: [],
	totalScore: 0,
	init(){
		this.ele=document.getElementById("main");
		return this;
	},
	start(){
		console.log("开始游戏");
		this.loadding(()=>{
			console.log("加载游戏结束！");
			myPlane.init().move();
			myPlane.fire();
			gameEngine.createEnemy();
			gameEngine.crash();
			gameEngine.moveBackground();
		});
	}, 
	loadding(cb){
		let logo=document.createElement("div");
		gameEngine.ele.appendChild(logo);
		logo.className="logo";
		let load=document.createElement("div");
		gameEngine.ele.appendChild(load);
		load.className="load";
		const imgs=["../css/images2/loading1.png", "../css/images2/loading2.png", "../css/images2/loading3.png"];
		let i=0;
		const timer=setInterval(()=>{
			i++;
			if(i>=6){
				clearInterval(timer);
				gameEngine.ele.removeChild(logo);
				gameEngine.ele.removeChild(load);
				if(cb){
					cb();
				}
			}
			else{
				load.style.background="url("+imgs[i%3]+") no-repeat";
			}
		},500)
	},
	createEnemy(){
		setInterval(()=>{
			let flag = Math.random()>0.6 ? true : false;
			if(flag){
				let enemy=new Enemy(Enemy.prototype.Enemy_Type_Large);
				enemy.init().move();
			}
		},6000);
		setInterval(function(){
			let flag = Math.random()>0.5 ? true : false;
			if (flag) {
				let enemy = new Enemy(Enemy.prototype.Enemy_Type_Middle);
				enemy.init().move();
			}
		},2000);
		setInterval(()=>{
			let flag = Math.random()>0.3 ? true : false;
			if (flag) {
				let enemy = new Enemy(Enemy.prototype.Enemy_Type_Small);
				enemy.init().move();
			}
		}, 1000);
	},
	crash(){
		const timer = setInterval(()=>{
			for (let i=0; i<gameEngine.allEnemys.length; i++){
				for(let j=0; j<gameEngine.allBullets.length; j++){
					if ( isCrash(gameEngine.allEnemys[i].ele, gameEngine.allBullets[j].ele) ){
						gameEngine.allBullets[j].boom();
						gameEngine.allBullets.splice(j, 1);
						gameEngine.allEnemys[i].hurt();
					}
				}
				if ( isCrash(gameEngine.allEnemys[i].ele, myPlane.ele) ){
					clearInterval(timer);
					myPlane.boom(()=>{
						let myName = prompt("请留下您的大名， 您当前的分数是:"+gameEngine.totalScore, "");
						ajax({
							type: "post",
							url: "http://60.205.181.47/myPHPCode4/uploadScore.php",
							data: {name: myName, score: gameEngine.totalScore},
							success: (data)=>{
								console.log("提交成功: " + data);
								//进入排行榜
								location.href = "rand.html";
							}
						})
					});
					break;
				}
			}
				
		},30)
	},
	moveBackground(){
		let y = 0;
		setInterval(()=>{
			gameEngine.ele.style.backgroundPositionY = y++ + "px";
		}, 30);
		
	}
}
