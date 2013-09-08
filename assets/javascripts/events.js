/* 
    Common game events. 
    These events can happen to nearly any object. 
    If I define a base object type for games, these will go there. 
*/

function atWorldsEnd() {
  var snakeHead;
  
  if(!entities) return false;
  if(!(snakeHead = entities[0].blocks[0]))return false;
  
  if(snakeHead.x < 0
     ||
     snakeHead.y < 0
     ||
     snakeHead.x > document.width - snakeHead.width
     ||
     snakeHead.y > document.height - snakeHead.height)
        return true;
  
  return false;
}
                 
function bitSelf() {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    /* TODO: Fill this in. */
  });
  return false;
}