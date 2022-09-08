'use strict';

const score0 = document.querySelector('#score--0')
const score1 = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

score0.textContent = 0
score1.textContent = 0
diceEl.classList.add('hidden')
current0El.textContent = 0
current1El.textContent = 0

let scores, currentScore, activePlayer, playing


const init = function() {
  scores = [0, 0]
  currentScore = 0
  activePlayer = 0
  current0El.textContent = 0
  current1El.textContent = 0
  playing = true
  diceEl.classList.add('hidden')
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player1El.classList.remove('player--active')
  document.getElementById('score--0').textContent = 0
  document.getElementById('score--1').textContent = 0
  playing = true
}

init()

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')
}


btnRoll.addEventListener('click', function() {
  if (playing) {
    const dice = Math.trunc(Math.random()* 6) + 1
    diceEl.classList.remove('hidden')
    console.log(dice)
    diceEl.src = `dice-${dice}.png`
    if(dice !== 1){
      currentScore += dice
      document.getElementById(`current--${activePlayer}`).textContent = currentScore
      console.log(current0El.textContent)
    } else {
      switchPlayer()
      }
  }
})
  

btnHold.addEventListener('click', function() {
  if (playing) {
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    
    if (scores[activePlayer] >= 20){
      playing = false
      diceEl.classList.remove('hidden')
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }

    switchPlayer()
  }
})

btnNew.addEventListener('click', init)