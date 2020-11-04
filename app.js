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

const snake = new snakeBlock(150, 150, '#55dac6', 10, 10, 'left')

//console.log(snake);

  document.getElementById('status').addEventListener('click', function(){
      snake.render()
    
  })

  document,addEventListener('keyup', function(evt){
    
    // if(evt.key === 'w'){
    //     snake.y -=10
    // }else if(evt.key ==='a' ){
    // snake.x -= 10
    
    // }else if(evt.key === 's'){
    //     snake.y +=10
    
    // }else if(evt.key ==='d') {
    //     snake.x +=10
        
    //        }


      movementDisplay.textContent = `X:${snake.x}, Y${snake.y}`
})

function rePaint(){
    
    ctx.clearRect(0, 0, game.width, game.height)
    //ctx.unshift(10,10)
    if(snake.direction === 'left'){
        snake.x -=10
    }else if(snake.direction === 'right'){
        snake.x +=10 
    }else if(snake.direction === 'up' ){
            snake.y += 10 
    }else if(snake.direction === 'down'){
            snake.y -=10
    }
        
    
    snake.render()

}
setInterval(rePaint, 1000/300 ) 


// function to make the block move automatically using unshift

//using unshift 
//function snakeMovement()



// function to end game using coollision 