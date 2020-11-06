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
// class block {
//     constructor(x, y, color, width, height){
//         this.x = x
//         this.y = y
//         this.color = color
//         this.width = width
//         this.height = height
  
// }
render(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const snake = new snakeBlock(200, 200, '#55dac6', 10, 10, 'left')
//const newBlock = new snakeblock(200,200, '#55dac6', 10, 10, '')

//console.log(snake);

  document.getElementById('status').addEventListener('click', function(){
      snake.render()
      //newBlock.render()
    
  })

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

function rePaint(){
    
    ctx.clearRect(0, 0, game.width, game.height)
    //ctx.unshift(10,10)
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

//collision with the gamebaord
// function collision(snake){
//     if(snake.direction < game ) {
//         console.log('game over');
//     }
//     if(snake.direction > game){
//         console.log('game over as well ');
//     }
// }


// lose condition

//snake,


function collision(){
    if(snake.y > game.height){
        console.log("game is over")
    }else if(snake.x < 0){
        console.log("game is over")
    }else if(snake.x > game.width){
        console.log("game is over")
    }else if(snake.y <0){
            console.log("game is over")
}
}

//have blocks pop up on my canvas in random order(eat them up like packman first )


//you win when you eat 8 or 10 blocks still deciding varible that keeps track of how many blocks youve eaten

//being able to eat a block and win is a requirement 

//push function for multiblock snake create an empty array and push new blocks into it


// function to make the block move automatically using unshift

//using unshift 
//function snakeMovement()


