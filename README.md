##Snake-game

Goal of the game is to have a block generate move using keys on keyboard. And eat other blocks kind of like pacman. 

My blockers have been generating random block on my game board.

This allowed me to achieve movement

```javascript
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
```

This allowed me to have an end of game message using an if statemtent and a gameOver funcion

```javascript
function collision(){
    if(snake.y > game.height){
        resetCanvas()
        gameOver();
    }else if(snake.x < 0){
        resetCanvas()
        gameOver()
    
    }else if(snake.x > game.width){
        
        resetCanvas()
        gameOver()
        
    }else if(snake.y <0){
    
        resetCanvas()
        gameOver()
        
}
}

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
```



