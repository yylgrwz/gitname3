
//var gulp = require("gulp");
//
//gulp.task("one", function(){
//	console.log("one");
//	gulp.src("src/html/05_dafeiji.html")
//	    .pipe(gulp.dest("dest/html"))
//});
//
//gulp.task("two",function(){
//	console.log("two");
//})
//
//gulp.task("three",["one","two"],function(){
//	console.log("three");
//})
//
//gulp.task("default",["one","two"]);
////gulp.task("default",function(){
////	console.log("默认任务");
////})


var obj = {
	removeComments: true, //清除HTML注释
	collapseWhitespace: true, //压缩HTML
	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
	minifyJS: true, //压缩页面JS
	minifyCSS: true //压缩页面CSS
}







var gulp = require("gulp");
var minify = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");

gulp.task("jsTask",function(){
	gulp.src("src/js/bullet.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});

gulp.task("jsTask2",function(){
	gulp.src("src/js/enemy.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});
gulp.task("jsTask3",function(){
	gulp.src("src/js/ajax.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});
gulp.task("jsTask4",function(){
	gulp.src("src/js/base.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});
gulp.task("jsTask5",function(){
	gulp.src("src/js/common.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});
gulp.task("jsTask6",function(){
	gulp.src("src/js/gameEngine.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});
gulp.task("jsTask7",function(){
	gulp.src("src/js/myPlane.js")
		.pipe(babel({"presets": ["es2015"]}))
		.pipe(uglify())
	    .pipe(gulp.dest("dest/js"));
});
gulp.task("jsTask8",function(){
	gulp.src("src/css/dafeiji.css")
		.pipe(minify())
	    .pipe(gulp.dest("dest/css"));
});


gulp.task("default",["jsTask","jsTask2","jsTask3","jsTask4","jsTask5","jsTask6","jsTask7","jsTask8"]);























