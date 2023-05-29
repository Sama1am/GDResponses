let backButton = document.getElementById('backButton06');

backButton.addEventListener("click",function(){
    window.location.replace('/');

})

const width = 10;
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
let end = false;
const scoreDisplay = document.querySelector('#score');
const startButton = document.querySelector('#startButton');
const restartBtn = document.querySelector('#restart-btn')
let timerId;
let score = 0;
const colors = [
    'orange',
    'red',
    'purple',
    'green',
    'blue'
];

const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
]

const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [width+1, width, width*2, 1],
    [width*2+1, width, width+1, width*2+2]
]

const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
]

const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
]

const tetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

let random = Math.floor(Math.random()*tetrominos.length);
let currentRotation = 0;

let currentPos = 4;
let currentTetromino = tetrominos[random][currentRotation];


function draw(){
    currentTetromino.forEach(index =>{
        squares[currentPos +index].classList.add('tetromino');
        squares[currentPos + index].style.backgroundColor = colors[random]
    })
};


function undraw(){
    currentTetromino.forEach(index =>{
        squares[currentPos +index].classList.remove('tetromino')
        squares[currentPos + index].style.backgroundColor = ''
    })
};

document.addEventListener('keydown', (event)=> {    
    if(event.key === "a" && !end)
    {
        moveLeft();
    }

    if(event.key === "d" && !end)
    {
        moveRight();
    }

    if(event.key === "s" && !end)
    {
        moveDown();
    }

    if(event.key === "w" && !end)
    {
        rotate();
    }
});


function moveDown()
{
    undraw();
    currentPos += width;
    draw();
    stop();
}

function stop(){
    if(currentTetromino.some(index  => squares[currentPos + index +width].classList.contains('taken'))){
        currentTetromino.forEach(index => squares[currentPos + index].classList.add('taken'))

        random = nextRandom;
        nextRandom = Math.floor(Math.random() * tetrominos.length);
        currentTetromino = tetrominos[random][currentRotation];
        currentPos = 4;
        addScore();
        draw();
        displayShape();
        gameOver();
    }
};


function moveLeft()
{
    undraw();
    const isAtLeftEdge = currentTetromino.some(index => (currentPos + index)% width === 0)

    if(!isAtLeftEdge) currentPos -=1

    if(currentTetromino.some(index => squares[currentPos + index].classList.contains('taken'))){
        currentPos += 1;
    }
    draw();
};

function moveRight(){
    undraw();
    const isAtRighEdge = currentTetromino.some(index => (currentPos + index)% width === width -1)
    if(!isAtRighEdge) currentPos +=1

    if(currentTetromino.some(index => squares[currentPos + index].classList.contains('taken'))){
        currentPos -=1
    }
    draw();
};

function isAtRight() {
    return currentTetromino.some(index=> (currentPos + index + 1) % width === 0)  
}
  
function isAtLeft() {
    return currentTetromino.some(index=> (currentPos + index) % width === 0)
}

function checkRotatedPosition(P){
    P = P || currentPos       //get current position.  Then, check if the piece is near the left side.
    if ((P+1) % width < 4) {         //add 1 because the position index can be 1 less than where the piece is (with how they are indexed).     
      if (isAtRight()){            //use actual position to check if it's flipped over to right side
        currentPos += 1    //if so, add one to wrap it back around
        checkRotatedPosition(P) //check again.  Pass position from start, since long block might need to move more.
        }
    }
    else if (P % width > 5) {
      if (isAtLeft()){
        currentPos -= 1
      checkRotatedPosition(P)
      }
    }
  }
  
  //rotate the tetromino
function rotate() {
    undraw()
    currentRotation ++
    if(currentRotation === currentTetromino.length) { //if the current rotation gets to 4, make it go back to 0
      currentRotation = 0
    }
    currentTetromino = tetrominos[random][currentRotation]
    checkRotatedPosition()
    draw()
}


const displaySquares = document.querySelectorAll('.mini-grid div');
const displayWidth = 4;
let displayIndex = 0;
let nextRandom = 0;

const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
    [displayWidth+1, displayWidth+2, displayWidth*2, displayWidth*2+1], //zTetrimon
    [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
    [0, 1, displayWidth, displayWidth+1], //oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1], //iTetromino
    
];


function displayShape(){
    displaySquares.forEach(square => {
        square.classList.remove('tetromino')
        square.style.backgroundColor = ''
    });

    upNextTetrominoes[nextRandom].forEach(index =>{
        displaySquares[displayIndex + index].classList.add('tetromino')
        displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
        
    });
};

startButton.addEventListener('click',  () =>{
    if(timerId){
        clearInterval(timerId)
        timerId = null   
    }
    else{
        draw();
        timerId = setInterval(moveDown, 1000);
        nextRandom = Math.floor(Math.random()*tetrominos.length);
        displayShape();
        
    }
});

restartBtn.addEventListener('click', () =>{
    restart();
})

function addScore()
{
    for(let i = 0; i<199; i +=width){
        const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]

        if(row.every(index => squares[index].classList.contains('taken'))){
            score += 10
            scoreDisplay.innerHTML = score;
            row.forEach(index => {
                squares[index].classList.remove('taken');
                squares[index].classList.remove('tetromino');
                squares[index].style.backgroundColor = ''
                
            })
            const squaresRemoved = squares.splice(i, width);
            squares = squaresRemoved.concat(squares);
            squares.forEach(cell => grid.appendChild(cell));
        }
    }
}

function gameOver(){
    if(currentTetromino.some(index => squares[currentRotation + index].classList.contains('taken'))){
        scoreDisplay.innerHTML = 'end';
        clearInterval(timerId);
        end = true;

        for(let i = 0; i< 199; i += width){
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
            row.forEach(index => {
                squares[index].classList.remove('taken');
                squares[index].classList.remove('tetromino');  
                squares[index].style.backgroundColor = ''
            })
            const squaresRemoved = squares.splice(i, width);
            squares = squaresRemoved.concat(squares);
            squares.forEach(cell => grid.appendChild(cell));
        }
    }
}


function restart(){

    for(let i = 0; i< 199; i += width){
        const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
        row.forEach(index => {
            squares[index].classList.remove('taken');
            squares[index].classList.remove('tetromino');  
            squares[index].style.backgroundColor = ''
        })
        const squaresRemoved = squares.splice(i, width);
        squares = squaresRemoved.concat(squares);
        squares.forEach(cell => grid.appendChild(cell));
    }
    end = false;
    score = 0;
    scoreDisplay.innerHTML = score;
    currentTetromino.remove('tetromino');
    
    draw();
    timerId = setInterval(moveDown, 1000);
    nextRandom = Math.floor(Math.random()*tetrominos.length);
    displayShape();
        
    
}

