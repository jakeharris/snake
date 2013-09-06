/* 
    Common game events. 
    These events can happen to nearly any object. 
    If I define a base object type for games, these will go there. 
*/

function atWorldsEnd() {
  if(!entities) return false;
  var ret = false;
  entities.forEach(function (e, i, a) {
    
  });
  return ret;
}

function outsideMapBounds() {
      if(e.x < 0
       ||
       e.y < 0
       ||
       e.x > document.width - e.width
       ||
       e.y > document.height - e.height)
        return true;
}
                   
function bitSelf() {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    /* TODO: Fill this in. */
  });
  return false;
}