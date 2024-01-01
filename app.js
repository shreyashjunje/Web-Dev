let div=document.querySelector("div");
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");
let sum=0;

btn1.addEventListener("click",function(){
    
    div.innerText=1;
    sum=sum+1;
   
});

btn2.addEventListener("click",function(){
    div.innerText=2;
    sum=sum+2;
    
});

btn3.addEventListener("click",function(){
    div.innerText="+";
});

btn4.addEventListener("click",function(){
   div.innerText=sum;
   sum=0;
});