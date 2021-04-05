var btn=document.getElementById("a");
var ipt=document.getElementsByTagName("input");
var spans=document.getElementsByTagName("span");
btn.addEventListener("click",function(e){
	function jg(a,b){
	switch(e.target.innerHTML){
		case "+":return a+b;break;
		case "-":return a-b;break;
		case "×":return a*b;break;
		default:return a/b;
	}
}
var he=jg(Number(ipt[0].value),Number(ipt[1].value));
spans[1].innerHTML="="+he;
});


//字面量定义对象
var pose={
	name:"小明",
	eag:18,
	ff:function(){}
};
//new Object定义对象
var pose2=new Object();
pose2.name="小米";
pose2.eag=10;
pose2.ff=function(){};
//构造函数定义对象
function dx(a,b,c){
	this.name=a;
	this.eag=b;
	this.xb=c;
	this.ff=function(){};
}
var pose3=new dx("小花",28,"女");
var pose4=new dx("张三",22,"男");
//工厂模式定义函数
function bolok(a,b,c){
	var as=new Object();
	as.name=a;
	as.age=b;
	as.xb=c;
	as.er=function(){};
	return as;
}
var pose5=bolok("李四",10,"♂");
var pose6=bolok("王生",100,"男");
//portotype原型模式定义对象
function yu(){}
yu.prototype={
	name:"小姐",
	age:18,
	xb:"女",
	ff:function(){}
};
var pose7=new yu();
//构造函数+原型混合模式定义对象
function sd(a,b,c){
	this.name=a;
	this.age=b;
	this.xb=c;
}
sd.prototype={
	set:"草泥马",
	ff:function(){}
};
var pose8=new sd("不知道",85,"好");
var pose9=new sd("黄老板",52,"楠");


