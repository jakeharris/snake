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
     snakeHead.x > document.width/60 - snakeHead.width
     ||
     snakeHead.y > document.height/60 - snakeHead.height)
        return false;
  
  return false;
}
                 
function bitingSelf() {
  if(!entities) return false;
  if(!entities[0].blocks[0]) return false;

  return false;
  /*var head,
      ret = false;
  entities[0].blocks.some(function (e, i, a) {
    if(!head) { head = e; }
    else if(Math.sqrt(Math.pow(head.x - e.x, 2) + Math.pow(head.y - e.y, 2)) < 1) return (ret = true);
  });
  return ret;*/
}

function eatingEgg() {
  var head;
  if(!entities) return false;
  if(!(head = entities[0].blocks[0])) return false;
  if(!entities[1]) return false;
  
  return false;
  
  /*if(!head) { head = entities[0].blocks[0]; }
  else if(Math.sqrt(Math.pow(head.x - entities[1].x, 2) + Math.pow(head.y - entities[1].y, 2)) < 1) return true;

  return false;*/
}