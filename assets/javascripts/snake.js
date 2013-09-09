var width = document.width,
    height = document.height,
    c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    entities,
    game,
    score = 0,
    highscore = 0;

c.width = width;
c.height = height;

ctx.font = "22pt Arial";

var clear = function () {
        if(width != document.width || height != document.height) {
          c.width = (width = document.width);
          c.height = (height = document.height);
        }
        ctx.fillStyle = '#fafafa';
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
        
        ctx.fillStyle = '#282828';
        ctx.beginPath();
        ctx.fillText('Score: ' + score, document.width/20, document.height/20);
        ctx.fillText('High score: ' + highscore, document.width/20, document.height/10);
        ctx.closePath();
        ctx.fill();
    };

var logic = function () {
        if(!entities) {
          entities = [ new Snake({ }, { }), new Block ({ moves: false }) ];
          console.log(entities[1]);
          return;
        }
        if(atWorldsEnd()) return respawn();
        if(bitingSelf()) return respawn();
        if(eatingEgg()) return eggSpawn();
        return move();
    };

var loop = function () {
        clear();
        render();
        logic();
        game = setTimeout(loop, 10);
    };

document.addEventListener('keydown', function (e) {
  var d = entities[0].direction,
      key = e.which;
  
  if      (key == '37' && d != Direction.RIGHT) d = Direction.LEFT;
  else if (key == '38' && d != Direction.DOWN)  d = Direction.UP;
  else if (key == '39' && d != Direction.LEFT)  d = Direction.RIGHT;
  else if (key == '40' && d != Direction.UP)    d = Direction.DOWN;
  
  entities[0].direction = d;
  console.log(entities[0].direction);
})

loop();
