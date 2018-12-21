var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function LShape1() {
    Block.call(this);

    this.initialState = [
        [1, 1, 1],
        [0, 0, 1],
    ];

    var yShift = [1,1,1,2];
    var xShift = [2,1,2,1];
    var currentState = [];
    var color = getRandomColor();

    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }
    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}

function LShape2() {
    Block.call(this);

    this.initialState = [
        [1, 1, 1],
        [1, 0, 0],
    ];

    var yShift = [2,1,1,1];
    var xShift = [2,1,2,1];
    var currentState = [];
    var color = getRandomColor();

    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }
    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}
function SquareShape() {
    Block.call(this);

    this.initialState = [
        [1, 1],
        [1, 1]
    ];

    var yShift = [1,1,1,1];
    var xShift = [1,1,1,1];
    var currentState = [];

    var color = getRandomColor();

    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }

    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}

function SShape1() {
    Block.call(this);

    this.initialState = [
        [0, 1, 1],
        [1, 1, 0]
    ];

    var yShift = [1,2,1,2];
    var xShift = [2,1,2,1];
    var currentState = [];
    var color = getRandomColor();

    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }
    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}

function SShape2() {
    Block.call(this);

    this.initialState = [
        [1, 1, 0],
        [0, 1, 1]
    ];

    var yShift = [1,2,1,2];
    var xShift = [2,1,2,1];
    var currentState = [];
    var color = getRandomColor();

    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }
    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}

function TShape() {
    Block.call(this);

    this.initialState = [
        [1, 1, 1],
        [0, 1, 0]
    ];

    var yShift = [1,2,1,2];
    var xShift = [2,1,2,1];
    var currentState = [];

    var color = getRandomColor();
    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }
    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}

function StickShape() {
    Block.call(this);

    this.initialState = [
        [1, 1, 1, 1],
    ];

    var yShift = [2,3,2,3];
    var xShift = [3,0,3,0];

    var currentState = [];
    var color = getRandomColor();

    var rotation = 0;
    
    this.setRotation = function() {
        if (rotation >= 3) {
            rotation = 0;
        }
        else {
            rotation += 1;
        }
    }
    this.getRoation = function() {
        return rotation;
    }
    this.getColor = function() {
        return color;
    }
    this.getYShift = function() {
        return yShift[rotation];
    }
    this.getXShift = function() {
        return xShift[rotation];
    }
    this.getInitialState = function() {
        return this.initialState;
    }
    this.getCurrentState = function() {
        if (currentState.length) {
            return currentState;
        }
        else {
            return this.initialState;
        }
    }
    this.setCurrentState = function(newState) {
        currentState = newState;
    }
}

function Block() {
    var y = 0;
    var x = 7;

    var blockIsLocked = false;

    this.isLocked = function() {
        return blockIsLocked;
    }
    this.setLocked = function() {
        blockIsLocked = true;
    }
    this.getX = function() {
        return x;
    }
    this.getY = function() {
        return y;
    }
    this.canMoveDown = function() {
        let currentState = this.getCurrentState();
        let checkAllRows = [];
        var testY = y;

        for (let i = 0; i < currentState.length; i++) {
            for (let j = 0; j < currentState[i].length; j++) {
                let tempX = x + j;
                if (currentState[i][j] !== 0) {
                    testY = y + i + 1 ;
                }
                else {
                    testY = y + i;
                }
                if (testY < rows && (matrix[tempX][testY] === 0 || currentState[i][j] == 0)) {
                    checkAllRows.push(true);
                }
                else {
		          if (matrix[tempX][0] !== 0) {
                    return gameoverScreen();
		          }
		          else {
                    checkAllRows.push(false);
		          }   
                }
                testY = y;
            }
        }
        if (checkAllRows.every(allTrue)) {
            return true;
        }
        return false;
    }
    this.canMoveRight = function() {
        let currentState = this.getCurrentState();
        let checkAllRows = [];
        var testX = x;

        for (let i = 0; i < currentState.length; i++) {
            for (let j = 0; j < currentState[i].length; j++) {
                let tempY = y + i;
                if (currentState[i][j] !== 0) {
                    testX = x + j + 1 ;
                }
                else {
                    testX = x + j;
                }
                if (testX < columns && (matrix[testX][tempY] === 0 || currentState[i][j] == 0)) {
                    checkAllRows.push(true);
                }
                else {
                    checkAllRows.push(false);
                }
                testX = x;
            }
        }
        if (checkAllRows.every(allTrue)) {
            return true;
        }
        return false;
    }
    this.canMoveLeft = function() {
        let currentState = this.getCurrentState();
        let checkAllRows = [];
        var testX = x;

        for (let i = 0; i < currentState.length; i++) {
            for (let j = 0; j < currentState[i].length; j++) {
                let tempY = y + i;
                if (currentState[i][j] !== 0) {
                    testX = x + j - 1 ;
                }
                else {
                    testX = x + j;
                }
                if (testX >= 0 && (matrix[testX][tempY] === 0 || currentState[i][j] == 0)) {
                    checkAllRows.push(true);
                }
                else {
                    checkAllRows.push(false);
                }
                testX = x;
            }
        }
        if (checkAllRows.every(allTrue)) {
            return true;
        }
        return false;
    }
    this.moveLeft = function() {
        if (this.canMoveLeft()) {
            x -= 1;
        }
    }
    this.moveRight = function() {
        if (this.canMoveRight()) {
           x += 1;
        }
    }
    this.moveDown = function() {
       if (this.canMoveDown()) {
           y += 1;
       } 
       else {
           this.addBlockToBoard();
       }
    }
    this.rotate = function() {
        var currentState = this.getCurrentState();
        if (currentState.length) {
            state = currentState;
        }
        else {
            state = this.initialState;
        }
        currentState = rotateMatrixCounterClockwise(state);
        this.setCurrentState(currentState);
        this.setRotation();
        return currentState; 
    }
    this.addBlockToBoard = function() {
        var blockMatrix = this.getCurrentState();
        for (var i = 0; i < blockMatrix.length; i++) {
            for (var j = 0; j < blockMatrix[i].length; j++) {
                if (blockMatrix[i][j] !== 0) {
                    var x = this.getX() + j;
                    var y = this.getY() + i;
                    matrix[x][y] = this.getColor();
                }
            }
        }
        this.setLocked();
        return matrix;
    }
}

const allTrue = function(element) {
    return element === true;
}

const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

const rotateMatrix = matrix => (
  flipMatrix(matrix.reverse())
);

const rotateMatrixCounterClockwise = matrix => (
  flipMatrix(matrix).reverse()
);

const flipMatrixCounterClockwise = matrix => (
  rotateMatrix(matrix).reverse()
);

LShape1.prototype        = new Block();
LShape2.prototype        = new Block();
SquareShape.prototype    = new Block();
SShape1.prototype        = new Block();
SShape2.prototype        = new Block();
TShape.prototype         = new Block();
StickShape.prototype     = new Block();
