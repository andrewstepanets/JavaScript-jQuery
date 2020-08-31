const p1Display = document.querySelector('#p1Display'); 
const p2Display = document.querySelector('#p2Display'); 

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const numInput = document.querySelector('input[type=number]');

let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winScore = 5;
let winningScoreDisplay = document.querySelector('p span');

const reset = () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('text-success');
    p2Display.classList.remove('text-success');
    gameOver = false;
    resetButton.disabled = true;
};

numInput.addEventListener('change', () => {
    winningScoreDisplay.textContent = numInput.value;
    winScore = Number(numInput.value);
    reset();
});


p1Button.addEventListener('click', () => {
    if(!gameOver){
        p1Score++;
        if(p1Score === winScore) {
            p1Display.classList.add('text-success');
            gameOver = !gameOver;
            resetButton.disabled = false;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', () => {
    if(!gameOver){
        p2Score++;
        if(p2Score === winScore) {
            p2Display.classList.add('text-success');
            gameOver = !gameOver;
            resetButton.disabled = false;
        }
        p2Display.textContent = p2Score;
    }
});
resetButton.addEventListener('click', () => {
    reset();
});


