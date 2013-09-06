var width = document.width,
    height = document.height,
    c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    entities,
    game;

c.width = width;
c.height = height;

var clear = function () {
        if(width != document.width || height != document.height) {
          c.width = (width = document.width);
          c.height = (height = document.height);
        }
        ctx.fillStyle = '#d0e7f9';
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.closePath();
        ctx.fill();
    };

var render = function () { 
        if(!entities) return;
        entities.forEach(function (e, i, a) {  
          e.render();
        });
    };

var logic = function () {
        if(!entities) {
          entities = [ new Snake({ }, { }) ]; 
          return;
        }
        if(atWorldsEnd()) return respawn();
        if(bitSelf()) return respawn();
        return move();
    };

var loop = function () {
        clear();
        render();
        logic();
        game = setTimeout(loop, 1000 / 50);
    };

document.addEventListener('keydown', function (e) {
  var d = entities[0].direction,
      key = e.which;
  
  if      (key == '37' && d != Direction.RIGHT) d = Direction.LEFT;
  else if (key == '38' && d != Direction.DOWN)  d = Direction.UP;
  else if (key == '39' && d != Direction.LEFT)  d = Direction.RIGHT;
  else if (key == '40' && d != Direction.UP)    d = Direction.DOWN;
  
  entities[0].direction = d;
})

loop();