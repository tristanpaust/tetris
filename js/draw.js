var blockTypeArr = [LShape1, LShape2, SShape1, SShape2, TShape, SquareShape, StickShape];
var colors = ["#f00", "#001eff", "#00ff27", "#00fff6", "#f9ff00", "#c0f"];

var createRandomBlock = function () {
    var block = blockTypeArr[Math.floor(Math.random() * blockTypeArr.length)];
    var randomBlock = new block();
    return randomBlock;
};

var getRandomColor = function() {
    var color = colors[Math.floor(Math.random()* colors.length)];
    return color;
}

function drawBlock(block,newX, newY) {
    clearCanvas();
    drawBoard();
    var matrix = block.getCurrentState();

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                var x = 25 * (newX + j);
                var y = 25 * (newY + i);
                draw(x, y, block.getColor());
            }
        }
    }
}

function drawBoardLine(x1,y1, x2, y2) { 
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2, y2);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.closePath();
}

function drawBoardTile(x,y,color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 25, 25);
}
function drawBoard() {
    ctx.rect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = '#f9f9f9';
    ctx.fill();

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 0) {
                var x = i*25;
                var y = j*25;
                drawBoardTile(x,y,matrix[i][j]);
            }
        }
    }
    for (var i = 0; i < columns; i++) {
        var x = (canvas.width/columns) * i; 
        drawBoardLine(x,0,x,canvas.height);
    }
    for (var j = 0; j < rows; j++) {
        var y = (canvas.width/columns) * j; 
        drawBoardLine(0,y,canvas.width,y);
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(x, y, color) {
    ctx.beginPath();
    ctx.rect(x, y, 25, 25);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}