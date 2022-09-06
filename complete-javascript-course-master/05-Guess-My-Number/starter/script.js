'use strict';

let secretNumber = Math.trunc(Math.random() * 20) +1
let score = Number(20)
let highscore = Number(0)
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        // document.querySelector('.message').textContent = 'No number'
        displayMessage('No number')
    }
    if (score === 0) {
        // document.querySelector('.message').textContent = 'You Lost'
        displayMessage('You Lost')
        score = 0
    }else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'You won!!! congrats'
        displayMessage('You won!!! congrats')
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = secretNumber
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score
        }
    }else if (guess > secretNumber) {
        // document.querySelector('.message').textContent = 'you guessed too high';
        displayMessage('you guessed too high')
        score--;
        document.querySelector('.score').textContent = score;
    }else if (guess < secretNumber) {
        // document.querySelector('.message').textContent = 'you guessed too low';
        displayMessage('you guessed too low')
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) +1
    // document.querySelector('.message').textContent = 'Start Guessing...'
    displayMessage('Start Guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
})
