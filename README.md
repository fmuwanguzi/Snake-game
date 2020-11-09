## Felix's Snake 🐍 game

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

This allowed me to have an end of game message using an if statemtent and a gameOver funcion that displays you lost on the screen

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

## Getting through this blocker was the most exciting thing  🙌  :

After realizing I might have to start over if I use the same technique we used canvas crawler I decided to see if I could just relocate the snake

```javascript
function relocateBlock(){
    const minx = 0;
    const maxx = 400;
    const xvalue = Math.random() * (maxx - minx) + minx;

    const miny = 0;
    const maxy = 200;
    const yvalue = Math.random() * (maxy - miny) + miny;

    block1.x = xvalue;
    block1.y = yvalue;
}
```
This relocate function is now used every time the snake and block detect collisiton inside my eatingBlock function and the score changes as well

```javascript
function eatingBlock() {
     if (snake.x < block1.x + block1.width 
        && snake.x + snake.width > block1.x
        && snake.y < block1.y + block1.height
        && snake.y + snake.height > block1.y
        ){
           
            
            relocateBlock();
            score += 1;
            document.getElementById('score').innerHTML = 'Score ' + score
}
```

