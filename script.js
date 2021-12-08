var c=10;
window.onload=function(){
    document.getElementById("count").innerHTML=c;
    document.getElementById("succ").style.display="none";
    document.getElementById("fail").style.display="none";
}
function check(){
    var gen=Math.floor((Math.random() * 10) + 1);
    let num=document.getElementById("input").value;
    c=c-1;
    document.getElementById("count").innerHTML=c;
    if(c<1)
    {
        document.getElementById("mess").style.display="none";
        document.getElementById("card").style.display="none";
        document.getElementById("fail").style.display="block";
    }
    if(num<gen)
    {
        document.getElementById("mess").innerHTML="GUESSED NUMBER IS SMALL &#128554;";
    }
    if(num>gen)
    {
        document.getElementById("mess").innerHTML="GUESSED NUMBER IS BIG &#x1F622;";
    }
    if(num==gen)
    {
        document.getElementById("mess").style.display="none";
        document.getElementById("succ").style.display="block";
        document.getElementById("card").style.display="none";
    }
}