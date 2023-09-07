let star = "*"

for (let i = 0; i < 2; i++){
    document.getElementById("tree_star").innerHTML 
    += star + "<br>";
    star = star + "*";
}

let starTwo = "*0*"

for (let i = 0; i < 16; i++){
    document.getElementById("tree_star").innerHTML 
    += starTwo + "<br>";
    starTwo = starTwo + "0*";
}

function treeLights(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rGb = "rgb("+ red +", "+ green +", "+ blue +")";

    document.getElementById("rgb_code").textContent = rGb;

    document.getElementById("rgb_code").style.color = "white";

    document.getElementById("tree_star").style.color = rGb;
}

function on(){
    start = setInterval(treeLights, 500);
}

function off(){
    clearInterval(start);
}

let audio = new Audio("music.mp3");
function playSound(){
    audio.play();
}

function pauseSound(){
    audio.pause();
}

