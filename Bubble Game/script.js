let timer = 60;
let score = 0;
let rn =0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}
function makeBubble(){
    let clutter = "";
    for(let i=1;i<=112;i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimer(){
    let timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    // console.log(dets.target.textContent);it default gives string value which is black where as number is in blue.so we have to change the string to number as follows:
    // console.log(Number(dets.target.textContent));
    let clicknum = Number(dets.target.textContent);
    if(clicknum === rn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
