let gameSeq=[];
let userSeq=[];

let btns=["first-color","second-color","third-color","fourth-color"];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started!");
        started=true;
        levelUp();
    };
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
};


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};
function checkAns(idx){
    // console.log("curr level : ", level);

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! Your score was <b>${level-1}</b> <br>press any key to restart.`;
       document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}