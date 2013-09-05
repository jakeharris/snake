/* Common game events. */

function atWorldsEnd() {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    if(e.x < 0
       ||
       e.y < 0
       ||
       e.x > document.width - e.width
       ||
       e.y > document.height - e.height)
        return true;
  });
  return false;
}

function bitSelf() {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    /* TODO: Fill this in. */
  });
  return false;
}