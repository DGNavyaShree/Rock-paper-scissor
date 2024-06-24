let uscore=0;
let cscore=0;
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const uscorepara=document.querySelector("#uscore");
const cscorepara=document.querySelector("#cscore");

const genComputerchoice= ()=>{
    let options=["rock","paper","scissor"];
   const randomindex= Math.floor(Math.random()*3);
   return options[randomindex];

};
const drawGame=()=>{
    
    msg.innerText="game was draw";
    msg.style.backgroundColor="bisque";

};

const showWinner= (userwin ,userchoice, compchoice)=>{
    let x=userchoice;
    let y = compchoice;
    if(userwin){
        uscore++;
       
        uscorepara.innerText= uscore;
       
        msg.innerText=`You Won! Your ${x} beats ${y} `;
        msg.style.backgroundColor="green";
    }
    else{
        cscore++;
        cscorepara.innerText= cscore;
      
        msg.innerText=`you Lost. ${y} beats Yours ${x} `;
        msg.style.backgroundColor="red";
    };
   
  
};

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //computer choice
    const compchoice=genComputerchoice();
    console.log("computer choice = ",compchoice);

    if(userchoice===compchoice){
        drawGame();

    }
    else{
        userwin=true;
        if(userchoice="rock"){
            userwin= compchoice==="paper" ? false : true;
            
        }
        else if(userchoice="paper"){
            userwin=compchoice === "scissor" ? false :true;

        }
        else{
            userwin= compchoice==="rock"? false: true;
        }
        showWinner( userwin, userchoice, compchoice);
    }

};

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
   
        playGame(userchoice);


    });
});