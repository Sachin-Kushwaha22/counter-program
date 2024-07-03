const increseBtn=document.getElementById("increseBtn");
const resetBtn=document.getElementById("resetBtn");
const decreaseBtn=document.getElementById("decreaseBtn");
const countLabel=document.getElementById("countLabel");

let count=0;

increseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}

decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent = count;
}