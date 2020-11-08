const movementDisplay = document.querySelector ('#movement')
const game = document.querySelector('#game')

const computedStyle = getComputedStyle(game)

const height = computedStyle.height
const width = computedStyle.width

game.height = height.replace('px', '')
game.width = width.replace('px' ,'')

const ctx = game.getContext('2d')

  class snakeBlock {
      constructor(x, y, color, width, height, direction){
          this.x = x
          this.y = y
          this.color = color
          this.width = width
          this.height = height
          this.direction = direction
    
}

render(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const snake = new snakeBlock(200, 200, '#55dac6', 10, 10, 'left')
const Block1 = new snakeBlock(10, 10, 'blue', 10, 10, 'null')


class Block {
    constructor(x, y, color, width, height, direction){
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
        


  document.getElementById('status').addEventListener('click', function(){
      block.render()
      
    
  })

  const firstBlock = new Block(100,100, '#55dac6', 10, 10, 'right')

//this function allows me to use buttoons on my key board
document.addEventListener('keyup', function(evt){
    
    if(evt.key === 'w'){
        snake.direction = 'down' 
    }else if(evt.key ==='a' ){
        snake.direction = 'left'
    
    }else if(evt.key === 's'){
        snake.direction = 'up'
    
    }else if(evt.key ==='d') {
        snake.direction = 'right'
        
    }
    
        

    movementDisplay.textContent = `X:${snake.x}, Y${snake.y}`
})

//This is an animation function 
function rePaint(){
    
    ctx.clearRect(0, 0, game.width, game.height)
    
    if(snake.direction === 'left'){
        snake.x -=5
    }else if(snake.direction === 'right'){
        snake.x +=5
    }else if(snake.direction === 'up' ){
            snake.y +=5
    }else if(snake.direction === 'down'){
            snake.y -=5
    }
        
    
    snake.render()
    collision()

}
setInterval(rePaint, 1000/20 ) 

function randomPosition(){
    

    
    Block1.render()
    // Block2.render()
    // Block3.render()
    // Block4.render()
    // Block5.render()
    // Block6.render()

}
setInterval(randomPosition, 1000/20)

//collision with the gamebaord
// function collision(snake){
//     if(snake.direction < game ) {
//         console.log('game over');
//     }
//     if(snake.direction > game){
//         console.log('game over as well ');
//     }
// }



// collision detection
function collision(){
    if(snake.y > game.height){
        //console.log("game is over")
        resetCanvas()
        gameOver();
        //clearInterval(rePaint)
    }else if(snake.x < 0){
        //console.log("game is over")
        resetCanvas()
        gameOver()
        //clearInterval(rePaint)
    }else if(snake.x > game.width){
        //console.log("game is over")
        resetCanvas()
        gameOver()
        //clearInterval(rePaint)
    }else if(snake.y <0){
        //console.log("game is over")
        resetCanvas()
        gameOver()
        //clearInterval(rePaint)
}
}

// will tell user they lost and to restart the page for now

function gameOver() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    
    ctx.fillText('You lost please restart the page to try again',  game.width/2 , game.height/2);
}
function resetCanvas() {
    ctx.clearRect(0,0,game.width,game.height)
}
//have blocks pop up on my canvas in random order(eat them up like packman first )

function random(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
  }function makeBlocks() {
    foodX = random(0, game.width - 10);
    foodY = random(0, game.height - 10);  snake.forEach(function isFoodOnSnake(part) {
      const foodIsOnSnake = part.x == foodX && part.y == foodY
      if (foodIsOnSnake)
        createFood();
    });
  }
  function drawFood() {
    ctx.fillStyle = 'red';
    ctx.strokestyle = 'darkred';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
   }
   function main() {
    setTimeout(function onTick() {
      clearCanvas();
      drawFood()
      advanceSnake();
      drawSnake();    main();
    }, 100)
  }
  

// const newBlock = new snakeBlock(10, 10, 'blue', 10, 10, 'null')

// function randomBlocks() {
//     let position = x, y;
//     for (let i = 0; i < 10; i++) {
//         position += (Math.random() * 16 | 0;
//     }
//     return position;
// }

//eat random blocks like packman






//you win when you eat 8 or 10 blocks still deciding varible that keeps track of how many blocks youve eaten

//being able to eat a block and win is a requirement 

//push function for multiblock snake create an empty array and push new blocks into it


// function to make the block move automatically using unshift

//using unshift 
//function snakeMovement()


