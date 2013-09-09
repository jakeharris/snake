/* 
    Common game actions. 
    These actions can be performed by nearly any object. 
    If I define a base object type for games, these will go there. 
*/


function move () {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    if(e.moves) e.move();
  });
}

function respawn () {
  if(!entities) return false;
  entities = [ new Snake({ }, { }) ];
  if(highscore < score) highscore = score;
  score = 0;
  entities[1] =  new Block ({ }) ;
}

function eggSpawn () {
  if(!entities) return false;
  if(!entities[0]) return respawn();
  entities[1] =  new Block ({ }) ;
  growSnake();
  score++;
  entities[0].loops_to_move = (entities[0].loops_to_move)*0.95 //used to be //entities[0].loops_to_move--;
}

function growSnake () {
  if(!entities) return false;
  if(!entities[0]) return false;
  
  console.log("entered growSnake");
  
  var block,
      i,
      snakeBlocks = entities[0].blocks;
  
  i = snakeBlocks.length - 1;
  
  switch(snakeBlocks[i].direction) {
    case Direction.LEFT: //add it to the right of the last one
      block = new Block( { x: snakeBlocks[i].x + BLOCK_WIDTH, y: snakeBlocks[i], moves: true } );
      break;
    case Direction.UP: //add it to the bottom of the last one
      block = new Block( { x: snakeBlocks[i].x, y: snakeBlocks[i].y + BLOCK_HEIGHT, moves: true} );
      break;
    case Direction.RIGHT: //add it to the left of the last one
      block = new Block( { x: snakeBlocks[i].x - BLOCK_WIDTH, y: snakeBlocks[i], moves: true} );
      break;
    case Direction.DOWN: //add it to the top of the last one
      block = new Block( { x: snakeBlocks[i].x, y: snakeBlocks[i].y - BLOCK_HEIGHT, moves: true} );
      break;
    default:
      break;
  }
  
  snakeBlocks.push(block);
  entities[0].blocks = snakeBlocks;
}