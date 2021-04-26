
//ajax请求获取后台数据
var qq=new XMLHttpRequest(),
	d=null;
qq.onreadystatechange = function() {
	if (qq.readyState === 4)
	{
		if (qq.status >= 200 && qq.status < 300 || qq.status === 304)
		{
			d = JSON.parse(qq.responseText);
			console.log(d);
			xr();
		}
	}
};
qq.open("get", "hpjy.json", true);
qq.send(null);

function xr(){
var a=document.getElementsByClassName("a")[0],
    coson=document.getElementById("coson"),
    i=0,sum=30;
//观察元素a
var io=new IntersectionObserver(function(e){
	//判断a元素是否在可视区，如果在就创建30个div展示后台数据
	if(e[0].intersectionRatio>0){
		for(;i<sum;i++){
	var divs=document.createElement("div");
        divs.innerHTML='<a href="'+d.user[i].url+'"><img src="'+d.user[i].png+'"/><h2>'+d.user[i].name+'</h2><span>分类:'+d.user[i].sortname+'</span><br/><span>软件大小:'+d.user[i].appdx+'</span><br/><span>更新时间:'+d.user[i].time+'</span></a>';
	    coson.appendChild(divs);	
	//判断全部数据加载完毕，就停止观察元素并停止for循环
	if(i==d.user.length-1){io.unobserve(a);break;}
}
//for循环完毕，更新sun值，等待下一次调用
sum=sum+30;
	}
	
});
//观察元素a
io.observe(a);


}


/*

var a=document.getElementsByClassName("a")[0];
var io=new IntersectionObserver(function(e){
	console.log(e[0].intersectionRatio);
});
io.observe(a);




for(var i=d.user.length-1;i>=0;i--){
	var divs=document.createElement("div");
divs.innerHTML='<a href="'+d.user[i].url+'"><img src="'+d.user[i].png+'"/><h2>'+d.user[i].name+'</h2><span>分类:'+d.user[i].sortname+'</span><br/><span>软件大小:'+d.user[i].appdx+'</span><br/><span>更新时间:'+d.user[i].time+'</span></a>';
	coson.appendChild(divs);	
}
*/
