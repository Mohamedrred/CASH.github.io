const upbtn = document.getElementById("upbtn");
let upbtnClicked = false;

upbtn.addEventListener('click', function() {
    upbtnClicked = true;
    upbtnandshift();
});

upbtn.addEventListener('touchstart', function() {
    upbtnClicked = true;
    upbtnandshift();
});

function upbtnandshift() {
    if(upbtnClicked && shiftkeyClicked && bird.offsetTop > 0) {
        bird.style.top = (bird.offsetTop - 30) + "px";
    }
    else if(upbtnClicked && bird.offsetTop > 0) {
        bird.style.top = (bird.offsetTop - 20) + "px";
    }
};

const leftbtn = document.getElementById("leftbtn");
let leftbtnClicked = false;

leftbtn.addEventListener('click', function() {
    leftbtnClicked = true;
    leftbtnandshift();
});

leftbtn.addEventListener('touchstart', function() {
    leftbtnClicked = true;
    leftbtnandshift();
});

function leftbtnandshift() {
    if(leftbtnClicked && shiftkeyClicked && bird.offsetLeft > 0) {
        bird.style.left = (bird.offsetLeft - 30) + "px";
    }
    else if(leftbtnClicked && bird.offsetLeft > 0) {
        bird.style.left = (bird.offsetLeft - 20) + "px";
    }
};

const rightbtn = document.getElementById("rightbtn");
let rightbtnClicked = false;

rightbtn.addEventListener('click', function() {
    rightbtnClicked = true;
    rightbtnandshift();
});

rightbtn.addEventListener('touchstart', function() {
    rightbtnClicked = true;
    rightbtnandshift();
});

function rightbtnandshift() {
    if(rightbtnClicked && shiftkeyClicked && bird.offsetLeft < (gameCon.clientWidth - bird.clientWidth)) {
        bird.style.left = (bird.offsetLeft + 30) + "px";
    }
    else if(rightbtnClicked && bird.offsetLeft < (gameCon.clientWidth - bird.clientWidth)) {
        bird.style.left = (bird.offsetLeft + 20) + "px";
    }
};

const downbtn = document.getElementById("downbtn");
let downbtnClicked = false;

downbtn.addEventListener('click', function() {
    downbtnClicked = true;
    downbtnnandshift();
});

downbtn.addEventListener('touchstart', function() {
    downbtnClicked = true;
    downbtnnandshift();
});

function downbtnnandshift() {
    if(downbtnClicked && shiftkeyClicked && bird.offsetTop < (gameCon.clientHeight - bird.clientHeight)) {
        bird.style.top = (bird.offsetTop + 30) + "px";
    }
    else if(downbtnClicked && bird.offsetTop < (gameCon.clientHeight - bird.clientHeight)) {
        bird.style.top = (bird.offsetTop + 20) + "px";
    }
};

const shiftbtn = document.getElementById("shiftkey");
let shiftkeyClicked = false;