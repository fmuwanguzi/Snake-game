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
          this.direction = direction //snake can now move automatically
          //this.alive = true chose to use relocation instead of making the block disappear
    
}
render(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
}
// class block {
//     constructor(x, y, color, width, height){
//         this.x = x
//         this.y = y
//         this.color = color
//         this.width = width
//         this.height = height
  
// }
}

const snake = new snakeBlock(200, 200, '#55dac6', 10, 10, 'left')
const block1 = new snakeBlock(30, 30, 'blue', 10, 10, 'null')
let score = 0;
//onst block12 = new snakeBlock(300, 300, 'blue', 10, 10, 'null')

// class Block {
//     constructor(x, y, color, width, height, direction){
    //         this.x = x
    //         this.y = y
    //         this.color = color
    //         this.width = widthwwwww
    //         this.height = height
    //         this.direction = direction
    
    
    //   document.getElementById('status').addEventListener('click', function(){
        //       block.render()
        //       
        
        //   })
        
        //   const firstBlock = new Block(100,100, '#55dac6', 10, 10, 'right')
        
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
        
    //This is a relocation function that will be called afer snake hits block
    function relocateBlock(){
        const minx = 0;
        const maxx = 600;
        const xvalue = Math.random() * (maxx - minx) + minx;
        
        const miny = 0;
        const maxy = 300;
        const yvalue = Math.random() * (maxy - miny) + miny;
        
        block1.x = xvalue;
        block1.y = yvalue;
        }
        
    //This is an animation function game goes faster as you eat blocks 
    function rePaint(){
        
        ctx.clearRect(0, 0, game.width, game.height)
        
        if(snake.direction === 'left'){
            snake.x -=(5 + score)
        }else if(snake.direction === 'right'){
            snake.x +=(5 + score)
        }else if(snake.direction === 'up' ){
            snake.y +=(5 + score)
        }else if(snake.direction === 'down'){
            snake.y -=(5 + score)
        }
        
        
        
        snake.render()
        block1.render()

        // if(block1.alive){
            //     block1.render()
            // }
            winner()
            collisionWall()
            eatingBlock()
            //collisionBlock()
        }
        setInterval(rePaint, 1000/20 ) 
        
    //start with collision detection between snake and block1
    function eatingBlock() {
        if (snake.x < block1.x + block1.width 
            && snake.x + snake.width > block1.x
            && snake.y < block1.y + block1.height
            && snake.y + snake.height > block1.y
            ){
                // block1.alive = false
                // Need to render the block in a new position on the board
                //this relocates the blocks and add to the snakeswidth
                relocateBlock();
                score += 1;
                document.getElementById('score').innerHTML = 'Score ' + score
                snake.width += 5;
                snake.height += 5;
                
            }
        }
    //function to declare you won the game
    function winner(){
        if(score === 10){
            gameWin()
            //resetCanvas()
        }
    }
    //Reset the game
    document.getElementById("reset").addEventListener("click",function(){
        resetCanvas()
    });

    //Start the game
    // document.getElementById("Start").addEventListener("click", function(){
    //     snake.render()
    //     Block1.render()
    // })
                
                
                //if (snake.x + snake.width > block1.x){
                    //      console.log('hit 2')
                    //  }
                    //     snake.x < block1.x + block1.width &&
    //     snake.y + snake.height > block1.y &&
    //     snake.y < block1.y + block1.height ) { 

    //     block1.alive = false
        
        //block1 = new Block(newX, newY, 10, 10, 'blue');
    


// function randomPosition(){
    

    
//     Block1.render()
//     // Block2.render()
//     // Block3.render()
//     // Block4.render()
//     // Block5.render()
//     // Block6.render()

// }
// setInterval(randomPosition, 1000/20)



// collision detection with game canvas and ending the game
function collisionWall(){
    if(snake.y > game.height){
        
        //resetCanvas()
        gameOverMessage();
        
    }else if(snake.x < 0){
        
        //resetCanvas()
        gameOverMessage()
        
    }else if(snake.x > game.width){
        
        //resetCanvas()
        gameOverMessage()
        
    }else if(snake.y <0){
        
        //resetCanvas()
        gameOverMessage()
        
}
}
// function collisionBloc
//     if(snake.y > block1.height){
//         //console.log("game is over")
//         resetCanvas()
//         gameOver();
//         //clearInterval(rePaint)
//     }else if(snake.x < block1.width){
//         //console.log("game is over")
//         resetCanvas()
//         gameOver()
//         //clearInterval(rePaint)
//     }else if(snake.x > game.width){
//         //console.log("game is over")
//         resetCanvas()
//         gameOver()
//         //clearInterval(rePaint)
//     }else if(snake.y <0){
//         //console.log("game is over")
//         resetCanvas()
//         gameOver()
//         //clearInterval(rePaint)
// }
// }

// will tell user they lost and to restart the page for now

function gameOverMessage() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    
    ctx.fillText('You lost the game try again',  game.width/2 , game.height/2);
}
function resetCanvas() {
    window.location.reload();
}

//function to display you win

function gameWin() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    
    ctx.fillText('You Win',  game.width/2 , game.height/2);
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


