'use strict';

let currentScore = Number(document.querySelector('.current-score').textContent);

document.querySelector('.btn--roll').addEventListener('click', function () {
  const roll = Number(Math.trunc(Math.random() * 6) + 1);
  const dieNum = `dice-${roll}.png`;
  document.querySelector('.dice').setAttribute('src', dieNum);

  if (roll === 1) {
    currentScore = 0;
    document.querySelector('.current-score').textContent = currentScore;

    // ---TODO--- SWITCH .player--active if class list contains, remove, if doens't contain, add
  } else {
    currentScore += roll;
    document.querySelector('.current-score').textContent = currentScore;

    // ---TODO--- set winner
    // if (currentScore >= 100) {
    //   console.log('winner!');
    // }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  let heldScore = Number(document.querySelector('.score').textContent);
  heldScore += currentScore;
  document.querySelector('.player--active .score').textContent = heldScore;
  currentScore = 0;
});

// ---TODO--- change querySelectors to variables before changing to numbers??