function myfunction2 (){

list = document.querySelector('.dino').classList;
console.log(list);
if(!(list.contains('GameOverOut'))){
// console.log(document.getElementById('input-username').value);
if(document.getElementById('input-username').value != ""){
    // console.log(document.getElementById('input-username').value);
    startFunction();
}
}
}


function startFunction(){



obstacle = document.querySelector('.obstacle');
obstacle.classList.add('obstacleAni')
score = 0;
cross = true;

audio = new Audio('Game1.mp3')
audioGo = new Audio('GameOver.mp3')


// audio.play();

const singu = setInterval(() => {
    audio.play();
}, 35000);
const singu11 = setInterval(() => {
    audio.play();
}, 100);


// setTimeout(()=>{
//     audio.pause();
// },29500);
// setTimeout(()=>{
//     audio.play();
// },2023);

document.onkeydown = function(e){
    console.log("Key code is : " + e.keyCode)
    dino = document.querySelector('.dino');
    rada1 = document.getElementById('input-username').value;
    console.log(rada1)


    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');
        },1000);
    }
    
    else if(e.keyCode == 39){
        
            dino = document.querySelector('.dino');
            dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            if(parseInt(dinoX)<1062){
            dino.style.left = dinoX+100+'px';
            }
    }

    else if(e.keyCode == 37){
        if(parseInt(dino.style.left)>0){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX-100)+'px';
        console.log(dino.style.left);
        }
    }
}

setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetX1 = Math.round(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX,offsetY);

    if(offsetX<115 && offsetY<110){
        score-=1;
        updateScore(score);
        document.querySelector('.gameOver').textContent = "Game Over";
        clearInterval(singu);
        clearInterval(singu11);
        audio.pause();
        // gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audioGo.play();
        setTimeout(()=>{
            audioGo.pause();
        },3001)
        dino = document.querySelector('.dino');
        dino.classList.add('GameOverOut');
        cross = false;
        
    }
    list = document.querySelector('.dino').classList;

    // if(!(list.contains('GameOverOut'))){

    if(cross && offsetX<150){
        score+=1;
        updateScore(score);
        cross = false;
        
        // console.log(s)
        if(score == 2){
            document.querySelector('.msg').textContent = 'You are doing great ! '+ rada1;
        }
        setTimeout(()=>{
            document.querySelector('.msg').textContent = '';
        },3000)
        if(score == 6){
            document.querySelector('.msg').textContent = 'Excellet job ! '+ rada1;
        }
        setTimeout(()=>{
            document.querySelector('.msg').textContent = '';
        },3000)
        if(score == 14){
            document.querySelector('.msg').textContent = 'Marvelous player ! '+ rada1;
        }
        setTimeout(()=>{
            document.querySelector('.msg').textContent = '';
        },3000)
        setTimeout(()=>{
            cross = true;
        },601);

        setTimeout(()=>{
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur;
            if(aniDur>4.0){
                newDur = aniDur - 0.1;
            }

            else{
                newDur = 4.0;
            }

            obstacle.style.animationDuration = newDur + 's';
            console.log(newDur)
        },1001)
 
    }
    // }

    
},100);

function updateScore(score){
    scoreCount.innerHTML = "Your Score: " + score;
}

}
