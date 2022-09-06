'use strict';

const secretNumber = Math.trunc(Math.random() * 20) +1
let score = Number(20)
document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = 'No number'
    }
    if (score === 0) {
        document.querySelector('.message').textContent = 'You Lost'
        score = 0
    }else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You won!!! congrats'
    }else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'you guessed too hight';
        score--;
        document.querySelector('.score').textContent = score;
    }else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'you guessed too low';
        score--;
        document.querySelector('.score').textContent = score;
    }
})
