let a=5;
let b=6;
let c=7;

if(a>=b && a>=c){
    console.log(a," is greater number");
}else if(b>=a && b>=c){
    console.log(b," is greater number");
}else{
    console.log(c,` is greater number`);
}


let str = "apple";
if((str[0]=='a' || str[0]=='A') && str.length > 5){
    console.log("golden string");
}else{
    console.log("not a golden string");
}

let month=2;
switch(month){
    case 1: 
        console.log("jan","feb","mar");
        break;
    case 2:
        console.log("april","may","june");
        break;
    case 3:
        console.log("july","aug","sep");
        break;
    case 4 :
        console.log("oct","nov","dec");
        break;

// }

// let name= prompt("Enter the name: ");
// let age = prompt("Enter the age: ");
// alert(`${name} is ${age} years old`)

// let num=40;
// if(num % 10 == 0){
//     console.log("good");
// }else{
//     console.log("bad");
// }



//create a function to roll a dice
function rolladice(){
    const random = Math.floor(Math.random()*6)+1;

    console.log(random);

}

//print multiplication table of a nnumber 
function table(n){
    let e=n*10;
    for(let i=n;i<=e;i=i+n){
        console.log(i);
    }
}

// //counbt numvber from 1 to n
// function count(n){
//     let count=0;
//     for(let i=1;i<=n;i++){
//         count=count+i;
        
//     }
//     return count;
// }


// rolladice();
// table(5);


// const student={
//     name: "yash",
//     eng: 90,
//     math: 78,
//     phy: 37,
//     getavg(){
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }

// }
//  function getavg(){
//     console.log(this);
    
    
// }

// console.log("hey guys");
// // setTimeout(() =>{
// //     console.log("channel");
// // },9000);

// let id = setInterval(() => {
//     console.log("hi");
// },2000);

// let id2 = setInterval(() => {
//     console.log("guys");
// },2000);


