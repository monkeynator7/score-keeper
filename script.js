const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display')


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1button.addEventListener('click', function () {
    if(!isGameOver){
        p1Score += 1;
    }
    if (p1Score === winningScore) {
        isGameOver = true;
    }
    p1Display.textContent = p1Score;
})


p2button.addEventListener('click', function () {
    if(!isGameOver){
        p2Score += 1;
    }
    if (p2Score === winningScore) {
        isGameOver = true;
    }
    p2Display.textContent = p2Score;
})


