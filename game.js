var canvas = document.getElementById('canvas');
var scoreBoard = document.getElementById('score');
var pauseButton = document.getElementById('pausegame');
var restartButton = document.getElementById('restartgame');

var ctx = canvas.getContext('2d');

var rows = canvas.height / 25;
var columns = canvas.width / 25;
var matrix = [];

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

function makeBoard() {
    for (let i = 0; i < columns; i++) {
        matrix.push(new Array(rows).fill(0));
    }
    return matrix;
}

var Keys = {
	up: false,
	down: false,
	left: false,
	right: false
    };

function keyDown() {
    window.onkeydown = function(e) {
        var kc = e.keyCode;
        e.preventDefault();

        if      (kc === 37) Keys.left = true;
        else if (kc === 38) Keys.up = true;
        else if (kc === 39) Keys.right = true;
        else if (kc === 40) {
            intervalSwitch(true);
        }
        else if (kc === 32) {
            newBlock.rotate();
            window.onkeydown = null;
        }
    };
}

function keyUp() {
    window.onkeyup = function(e) {
        var kc = e.keyCode;
        e.preventDefault();

        if      (kc === 37) Keys.left = false;
        else if (kc === 38) Keys.up = false;
        else if (kc === 39) Keys.right = false;
        else if (kc === 40) {
            intervalSwitch(false);
        }
        else if (kc === 32) {
            keyDown();
        }
    };
}

keyDown();
keyUp();

function extractColumn(arr, column) {
  return arr.map(x => x[column])
}

function allOnes(element) {
    return element !== 0;
}

function checkRowComplete() {
    var finishedRows = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix[i].length-1; j >= 0; j--) {
            if (extractColumn(matrix, j).every(allOnes) && !finishedRows.includes(j)) {
                finishedRows.push(j);
            } 
        }
    }
    return finishedRows;
}

function updateMatrix(indices, matrix) {
    let newMatrix = matrix;
    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = indices.length - 1; j >= 0; j--) {
            newMatrix[i].splice(indices[j], 1);
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < indices.length; j++) {
            newMatrix[i].unshift(0);
        }
    }
    score = score + indices.length * 10;
    updateScoreboard(score);
    return newMatrix;
}

function checkKeyStroke(newBlock) {
    if (Keys.left) {
        newBlock.moveLeft();
    }
    else if (Keys.right) {
        newBlock.moveRight();
    }
}

var board = makeBoard();
drawBoard(board);

var newBlock; 

function Interval(fn, time) {
    var timer = false;
    this.start = function () {
        if (!this.isRunning())
            timer = setInterval(fn, time);
    };
    this.stop = function () {
        clearInterval(timer);
        timer = false;
    };
    this.isRunning = function () {
        return timer !== false;
    };
}

var normalTimer = new Interval('newBlock.moveDown()', 200);
var shortTimer = new Interval('newBlock.moveDown()', 10);

function intervalSwitch(isShortInterval) {
    if (newBlock.isLocked() || !isShortInterval) {
       shortTimer.stop();
       normalTimer.start();
    }
    if (isShortInterval) {
        normalTimer.stop();
        shortTimer.start();
    }
}

function gameLoop() {

    drawBlock(newBlock, newBlock.getX(), newBlock.getY());

    if (Keys.left || Keys.right || Keys.up) {
        checkKeyStroke(newBlock);
    }
    if (newBlock.isLocked()) {
        updateMatrix(checkRowComplete(), matrix);
        newBlock = new createRandomBlock();
        return drawBlock(newBlock, newBlock.getX(), newBlock.getY());
    }
}

const startGame = function() {
    setInterval(gameLoop, 50);
    newBlock = new createRandomBlock();
    normalTimer.start();
    intervalSwitch(false);
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

showCountDown();
