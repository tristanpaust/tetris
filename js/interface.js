var scoreBoard = document.getElementById('score');
var pauseButton = document.getElementById('pausegame');
var restartButton = document.getElementById('restartgame');

var score = 0;

function updateScoreboard(n) {
    if (n.toString().length < 4) {
        var s = "000" + n;
        return scoreBoard.innerHTML = s.substr(s.length - 4);
    } else {
        return scoreBoard.innerHTML = n.toString();
    }
}

function pauseGame() {
    if (normalTimer.isRunning()) {
        normalTimer.stop();
        window.onkeydown = null;
        window.onkeyup = null;
        pauseButton.innerHTML = 'Resume';
        pauseScreen();
    }
    else {
        resumeGame();
    }
}

function resumeGame() {
    resumeCountDown();
}

function restartGame() {
    var gameScreen = document.getElementById('countdown');
    if (gameScreen !== undefined) {
        gameScreen.parentElement.removeChild(gameScreen);
    }
    score = 0;
    updateScoreboard(score);
    matrix = [];
    normalTimer.stop();
    board = makeBoard();
    drawBoard(board);
    showCountDown();
}

function addCountDown() {
    var body = document.getElementsByTagName('body')[0];
    var countdown = document.createElement('div');
    countdown.id = 'countdown';
    body.appendChild(countdown);
    countdownDisplay = document.createElement('p');
    countdownDisplay.id = 'countdownDisplay';
    countdown.appendChild(countdownDisplay);
}

function removeCountDown() {
    var countdown = document.getElementById('countdown');
    return countdown.parentElement.removeChild(countdown);
}

function pauseScreen() {
    addCountDown();
    var countdown = document.getElementById('countdown');
    var stateIndicator = document.createElement('p');
    var br = document.createElement('br');
    stateIndicator.classList.add("gamestate-indicator");
    stateIndicator.innerHTML = "Game is paused";
    countdown.appendChild(stateIndicator);
    countdown.appendChild(br);
}

function startScreen() {
    addCountDown();
    var countdown = document.getElementById('countdown');
    var stateIndicator = document.createElement('p');
    var br = document.createElement('br');
    stateIndicator.classList.add("gamestate-indicator");
    stateIndicator.innerHTML = "Game starts in:";
    countdown.appendChild(stateIndicator);
    countdown.appendChild(br);
}

function gameoverScreen() {
    normalTimer.stop();
    window.onkeydown = null;
    window.onkeyup = null;
    addCountDown(); 
    var countdown = document.getElementById('countdown');
    var stateIndicator = document.createElement('p');
    var br = document.createElement('br');
    stateIndicator.classList.add("gamestate-indicator");
    stateIndicator.innerHTML = "Game over!";
    stateIndicator.appendChild(br);
    countdown.appendChild(stateIndicator);
    countdown.appendChild(br);
    var buttonWrapper = document.createElement('p');
    buttonWrapper.classList.add('button-wrapper');
    var restartButton = document.createElement('a');
    restartButton.setAttribute('onclick', 'restartGame()');
    restartButton.href = '#'; 
    restartButton.innerHTML = 'Start a new game';
    restartButton.classList.add('restart-button');
    countdown.appendChild(buttonWrapper);
    buttonWrapper.appendChild(restartButton);
}

function resumeCountDown() {
    var countdownDisplay = document.getElementById('countdownDisplay');
    var time = 3;
    var countDown = setInterval(function () {
        countdownDisplay.innerHTML = time;
        time -= 1;
        if (time == -1) {
            clearInterval(countDown);
            removeCountDown();
            normalTimer.start();
            pauseButton.innerHTML = 'Pause';
            keyDown();
            keyUp();
        }
    }, 1000);
}

function showCountDown() {
    startScreen();
    var time = 3;
    var countdownDisplay = document.getElementById('countdownDisplay');
    var countDown = setInterval(function () {
        countdownDisplay.innerHTML = time;
        time -= 1;
        if (time == -1) {
            clearInterval(countDown);
            removeCountDown();
            return startGame();
        }
    }, 1000);
}