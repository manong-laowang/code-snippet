
var h4=document.getElementsByTagName("h4"),
    section=document.getElementsByTagName("section"),
	ipt=document.getElementsByTagName("input"),
	p=document.getElementsByTagName("p"),
	img=document.getElementsByTagName("img"),
	tese0=false,tese1=false,tese2=false,tese3=false,tese4=false,tese5=false;
for(var i=0;i<h4.length;i++){
	myjs.EventUtil.addHandler(h4[i],"click",function(e){
		if(e.target.title=="0"){
			section[0].style.display="block";
			section[1].style.display="none";
			}else{section[1].style.display="block";
			section[0].style.display="none";
			}
	});
}


myjs.EventUtil.addHandler(ipt[0],"blur",function(){
	if(ipt[0].value==""){p[0].innerHTML="用户名不能为空";
	       img[0].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
	}
	else{
		var zz=/^\w{6,12}$/;
		if(zz.test(ipt[0].value)){
			img[0].src="";
			p[0].innerHTML="";
			tese0=true;
		}else{
			img[0].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
			p[0].innerHTML="用户名只能由6～12位字母、数字和下划线组成";
		}
	}
});



myjs.EventUtil.addHandler(ipt[1],"blur",function(){
	if(ipt[1].value==""){p[1].innerHTML="密码不能为空";
	       img[1].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
	}
	else{
		var zz=/^[^\u4e00-\u9fa5\s]{6,12}$/;
		if(zz.test(ipt[1].value)){
			img[1].src="";
		    p[1].innerHTML="";
			tese1=true;
		}else{
			img[1].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
			p[1].innerHTML="密码只能由6～12位字母、数字和符号组成";
		}
	}
});


myjs.EventUtil.addHandler(ipt[2],"blur",function(){
	if(ipt[2].value==""){p[2].innerHTML="手机号不能为空";
	       img[2].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
	}
	else{
		var zz=/^\d{11}$/;
		if(zz.test(ipt[2].value)){
			img[2].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/zq.svg";
			p[2].innerHTML="";
			tese2=true;
		}else{
			img[2].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
			p[2].innerHTML="手机号码格式不正确";
		}
	}
});


myjs.EventUtil.addHandler(ipt[3],"blur",function(){
	if(ipt[3].value==""){p[3].innerHTML="邮箱不能为空";
	       img[3].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
	}
	else{
		var zz=/^\w+@\w+\.\w{2,4}$/;
		if(zz.test(ipt[3].value)){
			img[3].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/zq.svg";
			p[3].innerHTML="";
			tese3=true;
		}else{
			img[3].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
			p[3].innerHTML="邮箱格式不正确";
		}
	}
});


myjs.EventUtil.addHandler(ipt[4],"blur",function(){
	if(ipt[4].value==""){p[4].innerHTML="密码不能为空";
	       img[1].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
	}
	else{
		var zz=/^[^\u4e00-\u9fa5\s]{6,12}$/;
		if(zz.test(ipt[4].value)){
			img[4].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/zq.svg";
			p[4].innerHTML="";
			tese4=true;
		}else{
			img[4].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
			p[4].innerHTML="密码只能由6～12位字母、数字和符号组成";
		}
	}
});


myjs.EventUtil.addHandler(ipt[5],"blur",function(){
	if(ipt[5].value==""){p[5].innerHTML="重复密码不能为空";
	       img[5].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
	}
	else{
		if(ipt[5].value==ipt[4].value){
			img[5].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/zq.svg";
			p[5].innerHTML="";
			tese5=true;
		}else{
			img[5].src="https://cdn.jsdelivr.net/gh/manong-laowang/pic/图床/cw.svg";
			p[5].innerHTML="两次输入密码不一致";
		}
	}
});
