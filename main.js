
function fun1(){
    var x= document.getElementById("anima1").value;
    localStorage.setItem("txt1",x);
    x=document.getElementById("animal2").value;
    localStorage.setItem("txt2",x);
    x=document.getElementById("animal3").value;
    localStorage.setItem("txt3",x);
    x=document.getElementById("a1").value;
    localStorage.setItem("txt4",x);
    x=document.getElementById("verb1").value;
    localStorage.setItem("txt5",x);
    x=document.getElementById("hrs").value;
    localStorage.setItem("txt6",x);
    x=document.getElementById("speed").value;
    localStorage.setItem("txt7",x);
    x=document.getElementById("quo").value;
    localStorage.setItem("txt8",x);
    x=document.getElementById("msg").value;
    localStorage.setItem("txt9",x);
    if(document.getElementById('r1').checked){
    	x=document.getElementById('r1').value;
    	localStorage.setItem("txt10",x);
    }
    else if(document.getElementById('r2').checked){
    	x=document.getElementById('r2').value;
    	localStorage.setItem("txt10",x);
    }
}
 function fun2(){
 	localStorage.setItem("txt1", 'Tiger');
 	localStorage.setItem("txt2", 'Lion');
 	localStorage.setItem("txt3", 'Dog');
 	localStorage.setItem("txt4", 'alarmed');
 	localStorage.setItem("txt5", 'running');
 	localStorage.setItem("txt6", '2');
 	localStorage.setItem("txt7", 'Quicker');
 	localStorage.setItem("txt8", 'Example');
 	localStorage.setItem("txt9", 'This is meaningful message');
 	localStorage.setItem("txt10", 'Yes');
 }


for(var i=0;i<8;i++)
{
    document.getElementsByClassName("ani1")[i].innerHTML= localStorage.getItem("txt1");
}
for(var i=0;i<9;i++)
{
    document.getElementsByClassName("ani2")[i].innerHTML= localStorage.getItem("txt2");
}
document.getElementById("ani3").innerHTML=localStorage.getItem("txt3");

document.getElementById("ani4").innerHTML=localStorage.getItem("txt4");

for(i=0;i<3;i++){
	document.getElementsByClassName("ani5")[i].innerHTML= localStorage.getItem("txt5");
}
document.getElementById("ani6").innerHTML=localStorage.getItem("txt6");


document.getElementById("ani7").innerHTML=localStorage.getItem("txt7");


document.getElementById("ani8").innerHTML=localStorage.getItem("txt8");

document.getElementById("ani9").innerHTML=localStorage.getItem("txt9");

document.getElementById("ani10").innerHTML=localStorage.getItem("txt10");




