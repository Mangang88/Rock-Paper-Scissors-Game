const randomNumber = Math.random();
      let playerMove = '';
      let computerMove = '';
      let result = '';
      let scoreValue = 0;
      let win = 0;
      let lose = 0;
      let tie = 0;

      const rockButton = document.getElementById('rock-button');
      rockButton.addEventListener('click', () => {
        if (randomNumber < 1/3) {
          playerMove = 'rock';
          computerMove = 'rock';
          result = 'tie';
          tie++;
        } else if (randomNumber > 2/3) {
          playerMove = 'rock';
          computerMove = 'paper';
          result = 'you lose';
          lose++;
        } else {
          playerMove = 'rock';
          computerMove = 'scissors';
          result = 'you win';
          win++;
        }
        const resultsElement = document.querySelector('.js-results');
        resultsElement.innerHTML = `Player chose ${playerMove}, computer chose ${computerMove}. ${result}`;
        updateScore();

        const scoreElement = document.getElementById('score');
        scoreValue = win - lose;
        scoreElement.innerHTML = scoreValue;

        scoreElement.addEventListener('click', () => {
          if (result === 'tie') {
            scoreValue = scoreValue;
          } else if (result === 'you win') {
            scoreValue++;
          } else if (result === 'you lose') {
            scoreValue--;
          }
          scoreElement.innerHTML = scoreValue;
        });
      });

      const paperButton = document.getElementById('paper-button');
      paperButton.addEventListener('click', () => {
        if (randomNumber < 1/3) {
          playerMove = 'paper';
          computerMove = 'rock';
          result = 'you win';
          win++;
        } else if (randomNumber < 2/3) {
          playerMove = 'paper';
          computerMove = 'paper';
          result = 'tie';
          tie++;
        } else {
          playerMove = 'paper';
          computerMove = 'scissors';
          result = 'you lose';
          lose++;
        }
        const resultsElement = document.querySelector('.js-results');
        resultsElement.innerHTML = `Player chose ${playerMove}, computer chose ${computerMove}. ${result}`;
        updateScore();

        const scoreElement = document.getElementById('score');
        scoreElement.addEventListener('click', () => {
          if (result === 'tie') {
            scoreValue = scoreValue;
          } else if (result === 'you win') {
            scoreValue++;
          } else if (result === 'you lose') {
            scoreValue--;
          }
          scoreElement.innerHTML = scoreValue;
        });
      });

      const scissorsButton = document.getElementById('scissors-button');
      scissorsButton.addEventListener('click', () => {
        if (randomNumber < 1/3) {
          playerMove = 'scissors';
          computerMove = 'rock';
          result = 'you lose';
          lose++;
        } else if (randomNumber < 2/3) {
          playerMove = 'scissors';
          computerMove = 'paper';
          result = 'you win';
          win++;
        } else {
          playerMove = 'scissors';
          computerMove = 'scissors';
          result = 'tie';
          tie++;
        }
        const resultsElement = document.querySelector('.js-results');
        resultsElement.innerHTML = `Player chose ${playerMove}, computer chose ${computerMove}. ${result}`;
        updateScore();

        const scoreElement = document.getElementById('score');
        scoreElement.addEventListener('click', () => {
          if (result === 'tie') {
            scoreValue = scoreValue;
          } else if (result === 'you win') {
            scoreValue++;
          } else if (result === 'you lose') {
            scoreValue--;
          }
          scoreElement.innerHTML = scoreValue;
        });
      });

      const resetButton = document.getElementById('reset-button');
      resetButton.addEventListener('click', () => {
        const scoreElement = document.querySelector('.js-score');
        scoreValue = 0;
        win = 0;
        lose = 0;
        tie = 0;
        scoreElement.innerHTML = scoreValue;
        updateScore();
      });

      const autoButton = document.getElementById('auto-button');
      autoButton.addEventListener('click', () => {
        autoPlay();
      });

      function updateScore() {
        const scoreElement = document.querySelector('.js-score');
        scoreElement.innerHTML = `Wins: ${win}, Losses: ${lose}, Ties: ${tie}`;
      }

      function autoPlay() {
        const moves = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        playerMove = moves[randomIndex];
        computerMove = moves[randomIndex];
        if (playerMove === computerMove) {
          result = 'tie';
          tie++;
        } else if (
          (playerMove === 'rock' && computerMove === 'scissors') ||
          (playerMove === 'paper' && computerMove === 'rock') ||
          (playerMove === 'scissors' && computerMove === 'paper')
          ) {
          result = 'you win';
          win++;
        } else {
          result = 'you lose';
          lose++;
        }
        const resultsElement = document.querySelector('.js-results');
        resultsElement.innerHTML = `Player chose ${playerMove}, computer chose ${computerMove}. ${result}`;
        updateScore();
      }

      setInterval(() => {
        const autoPlayElement = document.querySelector('.js-auto');
        autoPlayElement.innerHTML = `Player chose ${playerMove}, computer chose ${computerMove}.`;
      }, 1000);