console.log("hello");
let boxes= document.querySelectorAll(".box");
let rebtn=document.querySelector(".reset");
let msg= document.querySelector(".msg");
let newbtn=document.querySelector(".new");
let msgwin=document.querySelector(".msgwin");
let turn0=true;
const winpatterns =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0= true;
        }
        box.disabled=true;
        checkwinner();
    });
    });
    const resetgame=()=>{
        turn0=true;
        enabox();
        msg.classList.add("hide");
    };

    const disbox =()=>{
        for(box of boxes)
        {
            box.disabled=true;
        }
    };
    const enabox =()=>{
        for(box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    };

    const showwinner=(winner)=>{
        msgwin.innerText=`Congratulations, Winner is ${winner}`;
        msg.classList.remove("hide");
        disbox();
    };
    const checkwinner=()=>{
        let c=0;
        for(let pattern of winpatterns)
        {
            let p1val= boxes[pattern[0]].innerText;
            let p2val= boxes[pattern[1]].innerText;
            let p3val=boxes[pattern[2]].innerText;
            if(p1val !="" && p2val !="" && p3val !="")
            {
                if(p1val==p2val && p1val==p3val)
                {
                    console.log("winner",p1val);
                    showwinner(p1val);
                }
                
            }
        }
    }

newbtn.addEventListener("click",resetgame);
rebtn.addEventListener("click",resetgame);