!function(){
var btn=document.getElementsByTagName("button"),
    tar=document.getElementsByTagName("textarea"),
    ipt=document.getElementsByClassName("ipt"),
	divs=document.getElementById("a"),
	ipts=divs.getElementsByTagName("input"),
	jgs=document.getElementsByClassName("jg"),
	dl=document.getElementById("dl");
btn[0].addEventListener("click",function(){
	if(!tar[0].value){alert("请输入文本");tar[0].focus();return;}
	if(!ipt[0].value){alert("请输入要匹配的字符");ipt[0].focus();return;}
	var x=vue();
	var zz=new RegExp(ipt[0].value,x);
	jgs[0].innerHTML=zz.test(tar[0].value)?tar[0].value.replace(zz,"<span style='background-color:green'>"+ipt[0].value+"</span>"):"<span>没有匹配到结果!";
});

function vue(){
	var cs2="";
	for(var i=0;i<ipts.length;i++){
		if(ipts[i].checked==true){cs2=cs2+ipts[i].value;}
	}
	return cs2;
}


btn[1].addEventListener("click",function(){
	if(!jgs[0].innerHTML){alert("请先进行匹配");return;}
	if(!ipt[1].value){alert("请输入要替换的文字");ipt[1].focus();return;}
	var x=vue();
	var zz=new RegExp(ipt[0].value,x);
	jgs[1].innerHTML=tar[0].value.replace(zz,"<span style='color:red'>"+ipt[1].value+"</span>");
});


dl.addEventListener("click",function(event){
	 ipt[0].value=event.target.title;
});
}();


/*
var w="<span clasd='a b' id='c' style=''>你好</span><div></div>";
var c=/<\/?\w+(\s+\w+=.*?)?>/g;
var f=/<.*?>/g;
alert(w.match(c));
alert(w.match(f));
*/
