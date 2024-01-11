var dino = document.getElementById("dino");
var bush = document.getElementById("bush");
var cloud1 = document.getElementById("cloud1");
var cloud2 = document.getElementById("cloud2");
var count = 0;
var hi_score=0;
const jump_audio=new Audio("jump.mp3");
const die_audio=new Audio("die.mp3");

function jump() {
    if (dino.classList == "jump") { return }
    dino.classList.add("jump");
    jump_audio.play();

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);

}
var checkDead = setInterval(function () {
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let bushleft = parseInt(window.getComputedStyle(bush).getPropertyValue("left"));

    if (dinotop > 310 && bushleft <40) {
        bush.style.animation = "none";
        cloud1.style.animation="none";
        cloud2.style.animation="none";
        die_audio.play();
        if(hi_score<Math.floor(count / 100)){
            hi_score=Math.floor(count / 100);
            
        }
        document.getElementById("hi_value").innerHTML = hi_score;
        alert("Game Over \n score: " + Math.floor(count / 100));
        count = 0;
        bush.style.animation = "block 1s infinite linear";
        cloud1.style.animation="move1 8s infinite linear"
        cloud2.style.animation="move2 5s infinite linear"
    }


    else {
        count++;

        document.getElementById("score_value").innerHTML = Math.floor(count / 100);
    }
}, 10);
