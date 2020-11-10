## Felix Muwanguzi

## Felix's Snake 🐍 game

Link to github website https://fmuwanguzi.github.io/

Goal of the game is to have a block generate move using keys on keyboard. And eat other blocks kind of like pacman. 

My blockers have been generating random block on my game board.

This allowed me to achieve movement using my keyboard

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
        
        gameOver();
    }else if(snake.x < 0){
        
        gameOver()
    
    }else if(snake.x > game.width){
        
        gameOver()
        
    }else if(snake.y <0){
    
        gameOver()
        
}
}

function gameOver() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    
    ctx.fillText('You lost',  game.width/2 , game.height/2);
}

```

## Getting through this blocker was the most exciting thing  🙌  :

After realizing I might have to start over if I use the same technique we used canvas crawler(makeing the block completely disappear using alive.false) I decided to see if I could just relocate the blocks that snake needs to eat to grow

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
This relocate function is now used every time the snake and block detect collisiton inside my eatingBlock function and the score changes as well.
As a last minute addition to increase the size of the snake game I incrimentallt added to snake.width and height.

This function also allows for the score to go up with each bite
```javascript
let score = 0;
function eatingBlock() {
     if (snake.x < block1.x + block1.width 
        && snake.x + snake.width > block1.x
        && snake.y < block1.y + block1.height
        && snake.y + snake.height > block1.y
        ){
           
            
        relocateBlock();
        score += 1;
        //This add 1 to the score as the player eats each block
        document.getElementById('score').innerHTML = 'Score ' + score
        snake.width += 5;
        snake.height += 5;
}
```

As part of the requirements for this project I added a reset button using an event listner.

```javascript

  //Reset the game
    document.getElementById("reset").addEventListener("click",function(){
        resetCanvas()
    });
    // clears the canvas when invoked
    function resetCanvas() {
    window.location.reload();
}
```
I used a set interval for myanimations and the game becomes incrementally faster after each block that gets consume by my snake. This allows for the game to have increasing difficulty.

```javascript
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

            winner()///sets winning condition to 10
            collisionWall()//set losing condition to collliding with wall
            eatingBlock()
           
        }
     const intervalID = setInterval(rePaint, 1000/20 ) 

```

Each of these functions allows for the canvas to be cleared first by clearing annyblocks on the canvas and then clearing the interval function above.

```javascript
function clearCanvas(){
    ctx.clearRect(0,0, game.width, game.height)
    clearInterval(intervalID);
}
```
I also set up my winning conditions of eating at least 10 blocks and then displaying a message

```javascript
function gameWin() {
    
    ctx.fillStyle = 'green';
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center'; 
    ctx.font = 'normal bold 30px arial';
    
    ctx.fillText('You Win YOU MADE IT TO 10',  game.width/2 , game.height/2);
}
function winner(){
    if(score === 10){
       clearCanvas()
        gameWin()
                
        }
    }
```

Combination of all these moving parts allowed for this image below which shows that the user/player going out of bounds and losing after missing the block.
![Came so far](image.png) 


## Some additional goals

I prepped a separte start screen that the user would click to start the game and the link work but I didn't have a chance to style it so I did not deply it to my website link.

In addition to that would like to have more fluid turns and animations with each turn of the snake block and change the block to an image that gets larger.

