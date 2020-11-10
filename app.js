
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
}
render(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

}

const snake = new snakeBlock(200, 200, '#55dac6', 10, 10, 'left')
const block1 = new snakeBlock(30, 30, 'blue', 10, 10, 'null')
let score = 0;

        
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

            winner()
            collisionWall()
            eatingBlock()
           
        }
     const intervalID = setInterval(rePaint, 1000/20 ) 
     
        
    //start with collision detection between snake and block1
    function eatingBlock() {
        if (snake.x < block1.x + block1.width 
            && snake.x + snake.width > block1.x
            && snake.y < block1.y + block1.height
            && snake.y + snake.height > block1.y
            ){
                
                //Need to render the block in a new position on the board
                //This relocates the blocks and add to the snakes width and snake height
                relocateBlock();
                score += 1;
                document.getElementById('score').innerText = 'Score ' + score
                snake.width += 5;
                snake.height += 5;
                
            }
        }
    //function to declare you won the game
    //It also allways you to win after the 10 bite
    function winner(){
        if(score === 10){
            clearCanvas()
            gameWin()
        }
    }
    //Reset the game with click event
    document.getElementById("reset").addEventListener("click",function(){
        resetCanvas()
    });


// collision detection with game canvas and ending the game
function collisionWall(){
    if(snake.y > game.height){
        clearCanvas()
        gameOverMessage()
    
        
    }else if(snake.x < 0){
        
        clearCanvas()
        gameOverMessage()

        
    }else if(snake.x > game.width){
        
        clearCanvas()
        gameOverMessage()
        
    }else if(snake.y <0){
        
        clearCanvas()
        gameOverMessage()
        
}
}

//Clears my blocks off the canvas and stops timer functions allowing annimation
function clearCanvas(){
    ctx.clearRect(0,0, game.width, game.height)
    clearInterval(intervalID);
}

//will tell user they lost

function gameOverMessage() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    ctx.fillText('You lost the game try again',  game.width/2 , game.height/2);
}

//This allows to restart the everything
function resetCanvas() {
    window.location.reload();
}

//function to display you win message 

function gameWin() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    
    ctx.fillText('You Win',  game.width/2 , game.height/2);
}



