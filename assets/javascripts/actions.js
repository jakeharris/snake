/* 
    Common game actions. 
    These actions can be performed by nearly any object. 
    If I define a base object type for games, these will go there. 
*/


function move () {
  if(!entities) return false;
  entities.forEach(function (e, i, a) {
    e.move();
  });
}

function respawn () {
  if(!entities) return false;
  entities = [ new Block({x: width/2, y: height/2}) ];
}