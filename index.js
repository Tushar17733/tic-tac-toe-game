let boxes = document.querySelectorAll('.box')
let reset = document.querySelector('.reset')

let turn0 = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            box.style.color="yellow";
            turn0 = false;

        }
        else {
            box.innerText = "X";
            box.style.color="red";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
    
}
);

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkwinner = () => {
    for (let pattern of winpatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
            console.log("winner",pos1val);
            let  a=document.createElement('div')
            a.className="toast";
            a.innerText=  `Winner: ${pos1val}`;
            document.body.prepend(a);
            disableboxes();
        
        }
    }
}
};

reset.addEventListener("click", () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
        
    }
    let id1=document.querySelector('.toast')
        id1.remove()
    
})