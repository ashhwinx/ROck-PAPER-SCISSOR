let boxes = document.querySelectorAll(".box");
let stoneBox = document.querySelector("#stone");
let paperBox = document.querySelector("#paper");
let scissorBox = document.querySelector("#secissor");
let winMsg = document.querySelector(".win-msg");
let winContainer = document.querySelector(".win-container");
let userScore = document.querySelector("#user");
let compScore = document.querySelector("#comp");

let user=0;
let comp=0;


const win = ()=>{
    winMsg.innerText="You Won"
    winContainer.classList.remove("hide")
    winMsg.style.background="green";
    user++
    userScore.innerText = user
}
const lose = ()=>{
    winMsg.innerText="You lost"
    winContainer.classList.remove("hide")
    winMsg.style.background="red"
    comp++
    compScore.innerText = comp
}
const draw = ()=>{
    winMsg.innerText="draw"
    winContainer.classList.remove("hide")
    winMsg.style.background="black"
}

const getRandomN =()=>{
    let nums= Math.floor(Math.random() * 3) ;
    let ash= boxes[nums].innerText;
    return ash;
    
}

stoneBox.addEventListener("click",()=>{
    let compTurn = getRandomN();
    if (compTurn=="paper"){
            lose()
    } else if (compTurn=="secissor"){
        win()
    } else{
        draw()
    }  
})

paperBox.addEventListener("click",()=>{
    let compTurn = getRandomN();
    if (compTurn=="secissor"){
            lose()
    } else if (compTurn=="stone"){
        win()
    } else{
        draw()
    }  
})

scissorBox.addEventListener("click",()=>{
    let compTurn = getRandomN();
    if (compTurn=="stone"){
            lose()
    } else if (compTurn=="paper"){
        win()
    } else{
        draw()
    }  
})