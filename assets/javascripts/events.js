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
                 
function bitingSelf() {
  if(!entities) return false;
  if(!entities[0].blocks[0]) return false;

  var head,
      ret = false;
  entities[0].blocks.some(function (e, i, a) {
    /* TODO: Fill this in. */
    // assuming the topleft is (0, 0)
    if(!head) { head = e; }
    else if(Math.sqrt(Math.pow(head.x - e.x, 2) + Math.pow(head.y - e.y, 2)) < BLOCK_WIDTH) return (ret = true);
  });
  return ret;
}
