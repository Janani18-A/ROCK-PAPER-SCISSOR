const choices=["rock","paper","scissors"];
const playerdisp=document.getElementById("playerdisp");
const comdisp=document.getElementById("comdisp");
const resdisp=document.getElementById("resdisp");
const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor= document.querySelector(".scissor");
rock.addEventListener("click",()=>playGame(0))
paper.addEventListener("click",()=>playGame(1))
scissor.addEventListener("click",()=>playGame(2))
function playGame(playchoice){
    const comchoice=Math.floor(Math.random()*3);
    playerdisp.textContent="Player : "+choices[playchoice];
    comdisp.textContent="Computer : "+choices[comchoice];
    
    if(playchoice==comchoice){
resdisp.textContent="It's a Tie!!"
    }
    else if ((playchoice===1 && comchoice===0)||(playchoice===2&& comchoice===1)||(playchoice===0 && comchoice===2)) {
        resdisp.textContent="You Win!!";
        
    } else {
        resdisp.textContent="You Loss!"
    }
    resdisp.classList.remove("show");
  void resdisp.offsetWidth;        
  resdisp.classList.add("show");
    
}