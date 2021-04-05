

var pics=new Array("image/sj.png","image/dq.png","image/fz.png","image/jj.png"),
  pic=document.getElementsByClassName("a")[0],
  clickleft=document.getElementsByClassName("b")[0],
  clickrigth=document.getElementsByClassName("c")[0],
  dian=document.getElementsByClassName("d"),
  a=document.getElementsByTagName("li"),
  b=document.getElementById("two"),
  c=document.getElementsByTagName("p")[0],
  lunbo=null,
   samun=0;
   //公用方法，当前要显示的图片src和小圆点的背景，先全部设置为#fff，然后在设置当前
   function yuan(){
	   for(var i=0;i<dian.length;i++){
		   pic.setAttribute("src",pics[samun]);
		   dian[i].style.backgroundColor="#fff";
		   dian[samun].style.backgroundColor="#325";
	   }
   }
   
   //公用方法，左切换按钮和自动轮播调用
   function lun(){
	   if(samun<pics.length-1){
	   samun++;
	   yuan();}
	   else{samun=0;yuan();}
   }
   
   //给左切换按钮绑定事件
   clickleft.addEventListener("click",lun);
   
   //给右切换按钮绑定事件
   clickrigth.addEventListener("click",function(){
	  if(samun<=0){samun=3;yuan();}
	  else{
		  samun--;
		  yuan();
	  }
   });

  //遍历 给每个小圆点绑定事件和增加一个自定义属性
for(var k=0;k<dian.length;k++){
	dian[k].setAttribute("data-id",k);
	dian[k].addEventListener("click",function(){
		samun=this.getAttribute("data-id");
		yuan();
	});
}

//自动轮播
lunbo=setInterval("lun()",2000);

//鼠标滑到图片上轮播停止
pic.addEventListener("mouseover",function(){clearInterval(lunbo);});

//鼠标离开继续轮播
pic.addEventListener("mouseout",function(){lunbo=setInterval("lun()",2000);});


//鼠标移入改变li背景并显示相应的二级菜单，离开则隐藏
for(var r=0;r<a.length;r++){
	a[r].addEventListener("mouseover",function(){
		for(var s=0;s<a.length;s++){
			a[s].style.backgroundColor="#F3F3F3";
			this.style.backgroundColor="#f8f8f8";
		}
	b.style.display="inline-block";
	switch(this.innerText){
		case "手机":c.innerHTML="手机<br/>手机配件:";break;
		case "服装":c.innerHTML="服装";break;
	    case "电器":c.innerHTML="电器";break;
		default:c.innerHTML="家具";}
	});
	a[r].addEventListener("mouseout",function(){
	b.style.display="none";
});
}

//鼠标移入二级菜单
b.addEventListener("mouseover",function(){b.style.display="inline-block";});
b.addEventListener("mouseout",function(){b.style.display="none";});


