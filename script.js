let box=document.querySelectorAll(".box");
let rbtn=document.querySelector("#resetgame");
let h2=document.querySelector("h2");
let turnx=true;
let arr2=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6], [2,5,8],[3,4,5],[6,7,8]];
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnx==true){
        box.textContent="X";
        turnx=false;
        h2.textContent="Player O turn ";
        }
        else{
            box.textContent="O";
            turnx=true;
            h2.textContent="Player X turn ";
        }
        box.disabled=true;
        checkwinner();
    })
})
rbtn.addEventListener("click",()=>{
    for (let index = 0; index < box.length; index++) {
        box[index].textContent = "";
        box[index].disabled=false;
    }
    turnx=true;
    h2.textContent="";
})
let checkwinner=()=> {
    for(let pattern of arr2){
        let pos1val=box[pattern[0]].textContent;
        let pos2val=box[pattern[1]].textContent;
        let pos3val=box[pattern[2]].textContent;
        if(pos1val=== "X" && pos2val==="X" && pos3val==="X"){
            console.log("wineer ",pos1val);
            for (let index = 0; index < box.length; index++) {
                
                box[index].disabled=true;
            }
            turnx=true;
            h2.textContent=`WINNER IS ${pos1val} Please reset the Game`;

        }
        else if(pos1val==="O" && pos2val==="O" && pos3val==="O"){
            console.log("wineer O");
            for (let index = 0; index < box.length; index++) {
                
                box[index].disabled=true;
            }
            turnx=true;
            h2.textContent=`WINNER IS ${pos1val} Please reset the Game`;
        }
    }
}