const start = document.getElementById("startbtn");
const startmenu = document.getElementById("startmenu");

start.addEventListener('click', function() {
    startmenu.style.display = 'none';
    gameCon.style.display = 'block';
});

const bird = document.getElementById('bird');

bird.style.width = 3 + '%';
bird.style.height = 5 + '%';

document.addEventListener("keydown", function(event) {
    const gameCon = document.getElementById('game-con');

    switch (event.key) {
        case "ArrowUp":
            if (event.shiftKey && bird.offsetTop > 0) {
                bird.style.top = (bird.offsetTop - 30) + "px";
            } else if (bird.offsetTop > 0) {
                bird.style.top = (bird.offsetTop - 20) + "px";
            }
            break;
        case "ArrowDown":
            if (event.shiftKey && bird.offsetTop < (gameCon.clientHeight - bird.clientHeight)) {
                bird.style.top = (bird.offsetTop + 30) + "px";
            } else if (bird.offsetTop < (gameCon.clientHeight - bird.clientHeight)) {
                bird.style.top = (bird.offsetTop + 20) + "px";
            }
            break;
        case "ArrowLeft":
            if (event.shiftKey && bird.offsetLeft > 0) {
                bird.style.left = (bird.offsetLeft - 30) + "px";
            } else if (bird.offsetLeft > 0) {
                bird.style.left = (bird.offsetLeft - 20) + "px"
            }
            break;
        case "ArrowRight":
            if (event.shiftKey && bird.offsetLeft < (gameCon.clientWidth - bird.clientWidth)) {
                bird.style.left = (bird.offsetLeft + 30) + "px";
            } else if (bird.offsetLeft < (gameCon.clientWidth - bird.clientWidth)) {
                bird.style.left = (bird.offsetLeft + 20) + "px";
            }
            break;
    }
});

function checkCollision(coin) {
    const obj1Rect = coin.getBoundingClientRect();
    const obj2Rect = bird.getBoundingClientRect();
    const isTouching = !(obj1Rect.right < obj2Rect.left ||
        obj1Rect.left > obj2Rect.right ||
        obj1Rect.bottom < obj2Rect.top ||
        obj1Rect.top > obj2Rect.bottom);
    return isTouching;
};

function checkCollision2(pipeTop) {
    const obj1Rect2 = pipeTop.getBoundingClientRect();
    const obj2Rect = bird.getBoundingClientRect();
    const isTouching1 = !(obj1Rect2.right < obj2Rect.left ||
        obj1Rect2.left > obj2Rect.right ||
        obj1Rect2.bottom < obj2Rect.top ||
        obj1Rect2.top > obj2Rect.bottom);
    return isTouching1;
};

function checkCollision3(speedcoin) {
    const obj1Rect3 = speedcoin.getBoundingClientRect();
    const obj2Rect = bird.getBoundingClientRect();
    const isTouching2 = !(obj1Rect3.right < obj2Rect.left ||
        obj1Rect3.left > obj2Rect.right ||
        obj1Rect3.bottom < obj2Rect.top ||
        obj1Rect3.top > obj2Rect.bottom);
    return isTouching2;
};


const gameCon = document.getElementById('game-con');
const score = document.createElement('label')
    score.style.position = 'absolute';
    score.style.top = '0%';
    score.style.left = '50%';
    score.style.transform = 'translate(-50%, 0)';
    score.style.fontSize = '50px';
    score.textContent = "score:";
    score.style.zIndex = "2";
    score.style.color = 'white';
    const scorecontre = document.createElement('label')
    scorecontre.style.color = 'white';
    scorecontre.style.fontSize = '50px';
    scorecontre.textContent = 0 + "$";
    gameCon.appendChild(score);
    score.appendChild(scorecontre);

function generatePipes() {
    const pipe = document.createElement('div');
    const gameCon = document.getElementById('game-con');
    const coin = document.createElement('div');
    const cointext = Math.floor(Math.random() * 9) / 1000;

    coin.style.backgroundColor = 'yellow';
    coin.style.width = '35px';
    coin.style.height = '35px';
    coin.style.borderRadius = '50%'
    coin.style.position = 'absolute';
    coin.style.display = 'flex';
    coin.style.alignItems = 'center';
    coin.style.textAlign = 'center';
    coin.style.fontSize = '16px';
    coin.style.fontWeight = 'bold';
    coin.style.top = Math.floor(Math.random() * 70 + 1) + '%';
    coin.style.right = Math.floor(Math.random() * 10 + 20) + '%';
    coin.style.animation = 'movecoin 5s linear infinite';
    coin.textContent = "+" + cointext + '$';

    const pipeTop = document.createElement('div');

    pipeTop.style.backgroundColor = 'black';
    pipeTop.style.width = '10%';
    pipeTop.style.height = Math.floor(Math.random() * 70 + 20) + '%';
    pipeTop.style.position = 'absolute';
    pipeTop.style.top = '0%';
    pipeTop.style.right = '0%';
    pipeTop.style.animation = 'movePipeTop 6s linear infinite';


    const collisionInterval = setInterval(function() {
        if (checkCollision(coin)) {
            coin.remove();
            scorecontre.textContent = parseFloat(scorecontre.textContent) + cointext + "$";
        }
    }, 10);

    const collisionInterval2 = setInterval(function() {
        if (checkCollision2(pipeTop)) {
            scorecontre.textContent = 0 + "$";
        }
    }, 10);

    const speedcoin = document.createElement('div');
    speedcoin.style.backgroundColor = 'red';
    speedcoin.style.width = '35px';
    speedcoin.style.height = '35px';
    speedcoin.style.borderRadius = '50%';
    speedcoin.style.position = 'absolute';
    speedcoin.style.display = 'flex';
    speedcoin.style.justifyContent = 'center';
    speedcoin.style.alignItems = 'center';
    speedcoin.style.textAlign = 'center';
    speedcoin.style.fontSize = '16px';
    speedcoin.style.fontWeight = 'bold';
    const speedcointext = Math.floor(Math.random() * 5) / 1000;
    speedcoin.textContent = "-" + speedcointext + "$";
    speedcoin.style.top = Math.floor(Math.random() * 70 + 1) + '%';
    speedcoin.style.right = Math.floor(Math.random() * 10 + 20) + '%';
    speedcoin.style.animation = 'movecoin 5s linear infinite';


    const collisionInterval3 = setInterval(function() {
        if (checkCollision3(speedcoin)) {
            speedcoin.remove();
            scorecontre.textContent = parseFloat(scorecontre.textContent) - speedcointext + "$";
        }
    }, 10);

    pipe.appendChild(pipeTop);
    pipe.appendChild(coin);
    pipe.appendChild(speedcoin);

    gameCon.appendChild(pipe);

    setTimeout(function() {
        pipe.remove();
        clearInterval(collisionInterval);
        clearInterval(collisionInterval2);
        clearInterval(collisionInterval3);
    }, 5899);
    setTimeout(function() {
        coin.remove();
        speedcoin.remove();
    }, 4899);
}

setInterval(generatePipes, 2000);
