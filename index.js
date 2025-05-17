let gameseq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];
let h3 = document.querySelector("h3");

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("game is started");
started = true;

    }
    levelup();

});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelup (){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
let ranidex = Math.floor(Math.random() * 3);
let randcolor = btns[ranidex];
let randbtn=document.querySelector(`.${randcolor}`);
btnflash(randbtn); 
  gameseq.push(randcolor);
  console.log(gameseq);
// console.log(randcolor);
// console.log(randbtn);
// console.log(ranidx);

}

function checkbtn(idx){
if (userseq[idx]===gameseq[idx]){
    if(userseq.length == gameseq.length){
        levelup();
    }
    console.log("same value");
    
}else{
    h3.innerHTML=`Game Over Your Score was <b>${level}</b><br> Press  Any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function() {
    document.querySelector("body").style.backgroundColor = "red";
    
    },150);
    reset();
}

}  
function btnpress(){
    console.log(this);
let btn = this;
btnflash(btn);
userflash(btn);
usercolor =  btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);
checkbtn(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset (){  
    started=false;
    gameseq=[];
    userseq=[];
  level=0;  
}